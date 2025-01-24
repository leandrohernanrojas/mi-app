import { createSlice } from "@reduxjs/toolkit";
import productos from "../data/productos.json"
import categorias from "../data/categorias.json"

export const shopSlice = createSlice({
    name:"shop",
    initialState:{
        categoria:categorias,
        productos:productos,
        productosFiltradosPorCategoria:[],
        productosSelecionados:{}
    },
    reducers:{
        setProductosFiltradoPorCategoria:(state,action) => {
            state.productosFiltradosPorCategoria= state.productos.filter(productos => productos.categoria === action.payload)
        }
    }
})

export const {setProductosFiltradoPorCategoria} = shopSlice.actions

export default shopSlice.reducer