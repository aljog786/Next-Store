"use client";

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeFromCart, updateQty, clearCart, CartItem } from '@/store/slices/cartSlice';
import type { RootState } from '@/store/store';

export default function CartPage() {
  const items: CartItem[] = useAppSelector((s: RootState) => s.cart.items);
  const dispatch = useAppDispatch();
  const total = items.reduce((sum: number, i: CartItem) => sum + i.price * i.qty, 0);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((i: CartItem) => (
            <div key={i.productId} className="flex items-center justify-between border p-3 rounded">
              <div className="flex items-center gap-3">
                {i.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={i.image} alt={i.name} className="w-16 h-16 object-cover rounded" />
                ) : (
                  <div className="w-16 h-16 bg-gray-100 rounded" />)
                }
                <div>
                  <div className="font-medium">{i.name}</div>
                  <div className="text-sm text-gray-600">${i.price.toFixed(2)}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={i.qty}
                  onChange={(e) => dispatch(updateQty({ productId: i.productId, qty: Number(e.target.value) }))}
                  className="w-20 border rounded px-2 py-1"
                />
                <button onClick={() => dispatch(removeFromCart(i.productId))} className="text-red-600">Remove</button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between border-t pt-4">
            <div className="text-lg font-semibold">Total: ${total.toFixed(2)}</div>
            <button onClick={() => dispatch(clearCart())} className="bg-black text-white px-4 py-2 rounded">Clear cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
