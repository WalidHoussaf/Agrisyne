import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb';
import Farm from '@/models/Farm';
import { createFarmSchema } from '@/lib/validations';

// GET /api/farms - Get all farms for the authenticated user
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const farms = await Farm.find({ owner: session.user.id })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ farms }, { status: 200 });
  } catch (error: any) {
    console.error('Get farms error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch farms' }, { status: 500 });
  }
}

// POST /api/farms - Create a new farm
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Validate input
    const validatedData = createFarmSchema.parse(body);

    await connectDB();

    // Create new farm
    const farm = await Farm.create({
      ...validatedData,
      owner: session.user.id,
    });

    return NextResponse.json(
      {
        message: 'Farm created successfully',
        farm,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create farm error:', error);

    if (error.name === 'ZodError') {
      return NextResponse.json({ error: 'Invalid input data', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: error.message || 'Failed to create farm' }, { status: 500 });
  }
}
