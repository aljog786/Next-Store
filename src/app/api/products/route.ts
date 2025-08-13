import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json(products);
  } catch {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json() as Partial<{
      name: string; slug: string; description: string; price: number; images: string[]; category?: string; countInStock: number; isFeatured: boolean;
    }>;
    const created = await Product.create(data);
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error('POST /api/products failed:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
