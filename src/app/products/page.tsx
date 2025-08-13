"use client";

import Link from 'next/link';
import { useGetProductsQuery } from '@/store/services/productsApi';

export default function ProductsPage() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Failed to load products</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((p) => (
        <Link
          href={`/products/${p._id}`}
          key={p._id}
          className="surface-card overflow-hidden transition hover:-translate-y-[2px]"
        >
          {p.images?.[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.images[0]} alt={p.name} className="w-full h-48 object-cover" />
          ) : (
            <div className="w-full h-48 bg-white/5" />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold gradient-text">{p.name}</h3>
            <p className="text-[color:var(--color-fg-muted)] line-clamp-2">{p.description}</p>
            <div className="mt-2 font-bold text-[color:var(--color-fg)]">${p.price.toFixed(2)}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
