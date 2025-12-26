import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Product } from "../../types/products"

export type Cart = {
    item: Product,
    quanty: number,
}

export type updateAction = "+" | "-" | "remove";

type cartState = {
    cartItem : Cart[] ;
    count : number;
    open : boolean;
}

const initialState : cartState = {
    cartItem : [],
    count : 0,
    open : false,
}


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        openCart(state)
        {
            state.open = true;
        },

        closeCart(state)
        {
            state.open = false;
        },

        addToCart(state, action : PayloadAction<Product>)
        {
            const products = action.payload;

            if(!products.inStock)
            {
                return;
            }


            const index = state.cartItem.findIndex(item => item.item.id === products.id)

            if(index !== -1)
            {
                state.cartItem[index].quanty += 1 ;
            }
            else{
                state.cartItem.push({item: products , quanty : 1})
            }
            state.count += 1;
        },

        updateToCart (state,action : PayloadAction<{products : Product; value : updateAction}>) {
            const { products, value } = action.payload;

            const index = state.cartItem.findIndex(item => item.item.id === products.id)


            if( value === "+")
            {
                state.cartItem[index].quanty += 1;
                state.count += 1;
            }
            else if( value === "-")
            {
                state.cartItem[index].quanty -= 1;
                state.count -= 1;
            }
            else if( value === "remove")
            {
                state.count -= state.cartItem[index].quanty;
                state.cartItem.slice(index,1);
            }
            state.cartItem = state.cartItem.filter(item => item.quanty > 0)
            if(state.count < 0)
                state.count = 0;
        }
    }

});

export const {openCart,closeCart,addToCart,updateToCart} = cartSlice.actions

export default cartSlice.reducer;
