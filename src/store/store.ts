import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productsApi } from '@/store/services/productsApi';
import cartReducer from '@/store/slices/cartSlice';

// Create a typed root reducer to avoid state values widening to `unknown`
const rootReducer = combineReducers({
  // Keep RTK Query reducer under its reducerPath
  [productsApi.reducerPath]: productsApi.reducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
