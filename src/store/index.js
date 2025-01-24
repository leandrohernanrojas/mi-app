import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../features/counterSlice";
import shopReducer from "../features/shopSlice"
import { shopApi}  from "../seervices/shop";
import { ordersApi } from "../seervices/orders";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../seervices/auth";
import useReducer  from "../features/userSlice";
import { userApi } from "../seervices/user";
import { cartApi } from "../seervices/cart";


export const store = configureStore({
    reducer: {
      counter:counterReducer,
      shop:shopReducer,
      user:useReducer,
      [shopApi.reducerPath]:shopApi.reducer,
      [ordersApi.reducerPath]:ordersApi.reducer,
      [authApi.reducerPath]:authApi.reducer,
      [userApi.reducerPath]:userApi.reducer,
      [cartApi.reducerPath]:cartApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
      getDefaultMiddleware().concat(shopApi.middleware,ordersApi.middleware,authApi.middleware,userApi.middleware,cartApi.middleware),
  })

  setupListeners(store.dispatch)
