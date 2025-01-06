import { base_url} from "../database";
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:base_url}),
    endpoints:(builder) => ({
        getProductos:builder.query({
            query:(categoria)=> `productos.json?orderBy="categoria"&equalTo="${categoria}"`
        }),
        getCategorias:builder.query({
            query:()=> "categorias.json"
        })
    })
})

export const {useGetProductosQuery,useGetCategoriasQuery} =shopApi 