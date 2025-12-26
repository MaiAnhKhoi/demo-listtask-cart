import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSilce"

export const store = configureStore( {
    reducer: {
        cart : cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type Appdispath = typeof store.dispatch;