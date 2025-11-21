import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb';
import Field from '@/models/Field';
import Farm from '@/models/Farm';
import { createFieldSchema } from '@/lib/validations';

// GET /api/fields - Get all fields for a farm or user
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const farmId = searchParams.get('farmId');

    await connectDB();

    let fields;

    if (farmId) {
      // Verify farm ownership
      const farm = await Farm.findOne({ _id: farmId, owner: session.user.id });
      if (!farm) {
        return NextResponse.json({ error: 'Farm not found' }, { status: 404 });
      }

      fields = await Field.find({ farm: farmId }).populate('farm', 'name').sort({ createdAt: -1 }).lean();
    } else {
      // Get all fields for user's farms
      const farms = await Farm.find({ owner: session.user.id }).select('_id');
      const farmIds = farms.map((f) => f._id);

      fields = await Field.find({ farm: { $in: farmIds } })
        .populate('farm', 'name')
        .sort({ createdAt: -1 })
        .lean();
    }

    return NextResponse.json({ fields }, { status: 200 });
  } catch (error: any) {
    console.error('Get fields error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch fields' }, { status: 500 });
  }
}

// POST /api/fields - Create a new field
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Validate input
    const validatedData = createFieldSchema.parse(body);

    await connectDB();

    // Verify farm ownership
    const farm = await Farm.findOne({ _id: validatedData.farm, owner: session.user.id });

    if (!farm) {
      return NextResponse.json({ error: 'Farm not found or unauthorized' }, { status: 403 });
    }

    // Create new field
    const field = await Field.create(validatedData);

    return NextResponse.json(
      {
        message: 'Field created successfully',
        field,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create field error:', error);

    if (error.name === 'ZodError') {
      return NextResponse.json({ error: 'Invalid input data', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: error.message || 'Failed to create field' }, { status: 500 });
  }
}
