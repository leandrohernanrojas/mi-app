import {  auth_base_url, API_KEY} from "../database";
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({baseUrl:auth_base_url}),
    endpoints:(builder) => ({
        signUp:builder.mutation({
            query:(credentials) => ({
                url:`accounts:signUp?key=${API_KEY}`,
                method:"POST",
                body:credentials
            })
        }),
        login:builder.mutation({
            query:(credentials) => ({
                url:`accounts:signInWithPassword?key=${API_KEY}`,
                method:"POST",
                body:credentials
            })
        }),
    })
})

export const {useSignUpMutation,useLoginMutation} = authApi 