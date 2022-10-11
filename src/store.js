import { configureStore } from "@reduxjs/toolkit";
import accountReducer from '../src/SignInSlice'
export const store = configureStore({
    reducer: {
        account: accountReducer
    }
})