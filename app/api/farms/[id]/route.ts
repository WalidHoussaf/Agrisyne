import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb';
import Farm from '@/models/Farm';
import Field from '@/models/Field';

// GET /api/farms/[id] - Get a specific farm
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const farm = await Farm.findOne({
      _id: params.id,
      owner: session.user.id,
    }).lean();

    if (!farm) {
      return NextResponse.json({ error: 'Farm not found' }, { status: 404 });
    }

    // Get fields count
    const fieldsCount = await Field.countDocuments({ farm: params.id });

    return NextResponse.json({ farm: { ...farm, fieldsCount } }, { status: 200 });
  } catch (error: any) {
    console.error('Get farm error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch farm' }, { status: 500 });
  }
}

// PUT /api/farms/[id] - Update a farm
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    await connectDB();

    const farm = await Farm.findOneAndUpdate(
      { _id: params.id, owner: session.user.id },
      body,
      { new: true, runValidators: true }
    );

    if (!farm) {
      return NextResponse.json({ error: 'Farm not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Farm updated successfully', farm }, { status: 200 });
  } catch (error: any) {
    console.error('Update farm error:', error);
    return NextResponse.json({ error: error.message || 'Failed to update farm' }, { status: 500 });
  }
}

// DELETE /api/farms/[id] - Delete a farm
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const farm = await Farm.findOneAndDelete({
      _id: params.id,
      owner: session.user.id,
    });

    if (!farm) {
      return NextResponse.json({ error: 'Farm not found' }, { status: 404 });
    }

    // Also delete associated fields (cascade delete)
    await Field.deleteMany({ farm: params.id });

    return NextResponse.json({ message: 'Farm deleted successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Delete farm error:', error);
    return NextResponse.json({ error: error.message || 'Failed to delete farm' }, { status: 500 });
  }
}
