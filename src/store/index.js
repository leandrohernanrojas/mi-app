import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../features/counterSlice";
import shopReducer from "../features/shopSlice"
import { shopApi}  from "../seervices/shop";
import { ordersApi } from "../seervices/orders";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../seervices/auth";

export const store = configureStore({
    reducer: {
      counter:counterReducer,
      shop:shopReducer,
      [shopApi.reducerPath]:shopApi.reducer,
      [ordersApi.reducerPath]:ordersApi.reducer,
      [authApi.reducerPath]:authApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
      getDefaultMiddleware().concat(shopApi.middleware,ordersApi.middleware,authApi.middleware),
  })

  setupListeners(store.dispatch)
