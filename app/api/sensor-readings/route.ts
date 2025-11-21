import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb';
import SensorReading from '@/models/SensorReading';
import Sensor from '@/models/Sensor';
import Field from '@/models/Field';
import Farm from '@/models/Farm';
import { createSensorReadingSchema } from '@/lib/validations';

// GET /api/sensor-readings - Get sensor readings
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const sensorId = searchParams.get('sensorId');
    const fieldId = searchParams.get('fieldId');
    const limit = parseInt(searchParams.get('limit') || '100');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    await connectDB();

    let query: any = {};

    if (sensorId) {
      // Verify sensor ownership
      const sensor = await Sensor.findById(sensorId).populate({
        path: 'field',
        populate: { path: 'farm' },
      });

      if (!sensor || ((sensor.field as any).farm as any).owner.toString() !== session.user.id) {
        return NextResponse.json({ error: 'Sensor not found' }, { status: 404 });
      }

      query.sensor = sensorId;
    } else if (fieldId) {
      // Verify field ownership
      const field = await Field.findById(fieldId).populate('farm');
      if (!field || (field.farm as any).owner.toString() !== session.user.id) {
        return NextResponse.json({ error: 'Field not found' }, { status: 404 });
      }

      query.field = fieldId;
    } else {
      // Get all readings for user's fields
      const farms = await Farm.find({ owner: session.user.id }).select('_id');
      const farmIds = farms.map((f) => f._id);
      const fields = await Field.find({ farm: { $in: farmIds } }).select('_id');
      const fieldIds = fields.map((f) => f._id);

      query.field = { $in: fieldIds };
    }

    // Add date range filter
    if (startDate || endDate) {
      query.timestamp = {};
      if (startDate) query.timestamp.$gte = new Date(startDate);
      if (endDate) query.timestamp.$lte = new Date(endDate);
    }

    const readings = await SensorReading.find(query)
      .populate('sensor', 'name type sensorId')
      .populate('field', 'name')
      .sort({ timestamp: -1 })
      .limit(limit)
      .lean();

    return NextResponse.json({ readings, count: readings.length }, { status: 200 });
  } catch (error: any) {
    console.error('Get sensor readings error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch sensor readings' }, { status: 500 });
  }
}

// POST /api/sensor-readings - Create a new sensor reading
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Validate input
    const validatedData = createSensorReadingSchema.parse(body);

    await connectDB();

    // Verify sensor ownership
    const sensor = await Sensor.findById(validatedData.sensor).populate({
      path: 'field',
      populate: { path: 'farm' },
    });

    if (!sensor || ((sensor.field as any).farm as any).owner.toString() !== session.user.id) {
      return NextResponse.json({ error: 'Sensor not found or unauthorized' }, { status: 403 });
    }

    // Create new reading
    const reading = await SensorReading.create(validatedData);

    // Update sensor's last reading time
    await Sensor.findByIdAndUpdate(validatedData.sensor, { lastReading: new Date() });

    return NextResponse.json(
      {
        message: 'Sensor reading created successfully',
        reading,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create sensor reading error:', error);

    if (error.name === 'ZodError') {
      return NextResponse.json({ error: 'Invalid input data', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: error.message || 'Failed to create sensor reading' }, { status: 500 });
  }
}
