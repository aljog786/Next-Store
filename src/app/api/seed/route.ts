import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import { sampleProducts } from '@/data/sample';

export async function POST() {
  try {
    await connectDB();
    await Product.deleteMany({});
    const created = await Product.insertMany(sampleProducts);
    return NextResponse.json({ inserted: created.length });
  } catch {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
