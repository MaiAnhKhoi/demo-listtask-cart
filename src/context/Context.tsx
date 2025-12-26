import type { Product } from "../types/products"
import React, { createContext, useState } from "react"

type Cart = {
    item: Product,
    quanty: number,
}

type CartContextType = {
    cart : Cart[],
    addToCart: (products : Product) => void,
    updateToCart : (products : Product, value : "+" | "-" | "remove") => void,
    count : number,
    openCart : () => void,
    open : boolean,
}

export const CartContext = createContext<CartContextType | undefined> (undefined);


export function CartProvider({children} : {children : React.ReactNode}) {
    const [cart, setCart] = useState<Cart[]>([]);
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);

    const addToCart = (products : Product) => {
        
        if(!products.inStock)
        {
            alert("Đã hết hàng");
            return;
        }
        setCount(count => count + 1),
        setCart( prev => 
        {
            const index = prev.findIndex( item => item.item.id === products.id)

            if(index !== -1)
            {
                const result = [...prev];

                result[index] = {
                    ...result[index],
                    quanty : result[index].quanty + 1
                }
                
                return result;
            }

            const result = [...prev, {
                item : products,
                quanty : 1,
            }];

            return result;
        })
    }

    const updateToCart = (products : Product, value : string) => {
        let denta = 0;
        
        setCart ( prev => {
            const result = [...prev];
            const index = prev.findIndex( item => item.item.id === products.id);

            if( value === "+")
            {
                result[index] = {
                    ...result[index],
                    quanty : result[index].quanty + 1,
                }
                denta = 1;
            }
            else if( value === "-")
            {
                result[index] = {
                    ...result[index],
                    quanty : result[index].quanty - 1, 
                }
                denta = -1;
            }
            else if( value === "remove")
            {
                denta = -result[index].quanty;
                result[index] = {
                    ...result[index],
                    quanty : 0,
                }
            }
            return result.filter(item => item.quanty > 0);
        })
        if(denta !== 0)
        {
            setCount(c => c+denta);
        }
    }

    const openCart = () => {
        setOpen(!open);
    }
    return (
        <CartContext.Provider value={{cart,addToCart,updateToCart,count,openCart,open}}>
            {children}
        </CartContext.Provider>
    )
}