import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb';
import Sensor from '@/models/Sensor';
import Field from '@/models/Field';
import Farm from '@/models/Farm';
import { createSensorSchema } from '@/lib/validations';

// GET /api/sensors - Get all sensors
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const fieldId = searchParams.get('fieldId');

    await connectDB();

    let sensors;

    if (fieldId) {
      // Verify field ownership
      const field = await Field.findById(fieldId).populate('farm');
      if (!field || (field.farm as any).owner.toString() !== session.user.id) {
        return NextResponse.json({ error: 'Field not found' }, { status: 404 });
      }

      sensors = await Sensor.find({ field: fieldId }).populate('field', 'name').sort({ createdAt: -1 }).lean();
    } else {
      // Get all sensors for user's fields
      const farms = await Farm.find({ owner: session.user.id }).select('_id');
      const farmIds = farms.map((f) => f._id);
      const fields = await Field.find({ farm: { $in: farmIds } }).select('_id');
      const fieldIds = fields.map((f) => f._id);

      sensors = await Sensor.find({ field: { $in: fieldIds } })
        .populate('field', 'name')
        .sort({ createdAt: -1 })
        .lean();
    }

    return NextResponse.json({ sensors }, { status: 200 });
  } catch (error: any) {
    console.error('Get sensors error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch sensors' }, { status: 500 });
  }
}

// POST /api/sensors - Create a new sensor
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Validate input
    const validatedData = createSensorSchema.parse(body);

    await connectDB();

    // Verify field ownership
    const field = await Field.findById(validatedData.field).populate('farm');

    if (!field || (field.farm as any).owner.toString() !== session.user.id) {
      return NextResponse.json({ error: 'Field not found or unauthorized' }, { status: 403 });
    }

    // Check if sensor ID already exists
    const existingSensor = await Sensor.findOne({ sensorId: validatedData.sensorId });
    if (existingSensor) {
      return NextResponse.json({ error: 'Sensor ID already exists' }, { status: 400 });
    }

    // Create new sensor
    const sensor = await Sensor.create(validatedData);

    return NextResponse.json(
      {
        message: 'Sensor created successfully',
        sensor,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create sensor error:', error);

    if (error.name === 'ZodError') {
      return NextResponse.json({ error: 'Invalid input data', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: error.message || 'Failed to create sensor' }, { status: 500 });
  }
}
