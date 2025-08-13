"use client";

import { useParams } from 'next/navigation';
import { useGetProductQuery } from '@/store/services/productsApi';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/slices/cartSlice';

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id as string;
  const { data: p, isLoading, error } = useGetProductQuery(id, { skip: !id });
  const dispatch = useAppDispatch();

  if (!id) return <div className="p-6">Invalid product</div>;
  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error || !p) return <div className="p-6 text-red-600">Product not found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {p.images?.[0] ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.images[0]} alt={p.name} className="w-full h-96 object-cover rounded" />
      ) : (
        <div className="w-full h-96 bg-gray-100 rounded" />
      )}
      <div>
        <h1 className="text-2xl font-semibold">{p.name}</h1>
        <div className="mt-2 text-gray-600">{p.description}</div>
        <div className="mt-4 text-xl font-bold">${p.price.toFixed(2)}</div>
        <button
          onClick={() => dispatch(addToCart({ productId: p._id, name: p.name, price: p.price, qty: 1, image: p.images?.[0] }))}
          className="mt-6 bg-black text-white px-4 py-2 rounded"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
