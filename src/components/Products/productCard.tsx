
import { useAppDispath } from "../../store/hooks/customCart";
import { addToCart } from "../../store/slice/cartSilce";
import {type Product } from "../../types/products";

export const ProductCard = ({ product }: { product: Product}) => {

  const dispath = useAppDispath();
  
  return <div className="bg-gray-400 flex flex-col gap-4">
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>In Stock: {product.inStock ? "Yes" : "No"}</p>
            {product.inStock ? <button className="bg-red-400 cursor-pointer hover:bg-red-500 transition: all 0.4s ease-in-out;" onClick ={() => dispath(addToCart(product))}>Add to cart</button> : null}
        </div>;
}