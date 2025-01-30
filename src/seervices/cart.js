import { base_url } from "../database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const cartApi = createApi({
    reducerPath: "cartApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    tagTypes: ["addProduct", "deleteProduct"],
    endpoints: (builder) => ({
        getCart: builder.query({
            query: ({ localId }) => `carts/${localId}.json`,
            transformResponse: (response) => {
                if (!response) {
                    return null
                }
                const data = Object.entries(response).map(item =>({...item[1],id: item[0]}))
                return data
            },
            providesTags: ["addProduct", "deleteProduct"]
        }),
        getProductoCart: builder.query({
            query: ({ localId, productoId }) => `carts/${localId}/${productoId}.json`,
            providesTags:["addProduct", "deleteProduct" ]
        }),
        postCart: builder.mutation({
            query: ({ localId, cartProducto }) => ({
                url: `carts/${localId}/${cartProducto.id}.json`,
                method: "PUT",
                body: cartProducto
            }),
            invalidatesTags: ["addProduct"]
        }),
        deleteCartProduct: builder.mutation({
            query: ({ localId, productoId }) => ({
                url: `carts/${localId}/${productoId}.json`,
                method: "DELETE",
            }),
            invalidatesTags: ["deleteProduct"]
        }),
        deleteCart: builder.mutation({
            query: ({ localId }) => ({
                url: `carts/${localId}.json`,
                method: "DELETE",
            }),
            invalidatesTags: ["deleteProduct"]
        })
    })
})

export const { useGetCartQuery,
    usePostCartMutation,
    useDeleteCartProductMutation,
    useDeleteCartMutation,
    useGetProductoCartQuery 
} = cartApi 