import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existing = state.items.find((x) => x.productId === item.productId);
      if (existing) existing.qty += item.qty; else state.items.push(item);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((x) => x.productId !== action.payload);
    },
    updateQty: (state, action: PayloadAction<{ productId: string; qty: number }>) => {
      const found = state.items.find((x) => x.productId === action.payload.productId);
      if (found) found.qty = action.payload.qty;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
