import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ProductDto {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category?: string;
  countInStock: number;
  isFeatured: boolean;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductDto[], void>({
      query: () => '/products',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'Products' as const, id: _id })),
              { type: 'Products', id: 'LIST' },
            ]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    getProduct: builder.query<ProductDto, string>({
      query: (id) => `/products/${id}`,
      providesTags: (_res, _err, id) => [{ type: 'Products', id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
