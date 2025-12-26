import { type Product } from "../../types/products";
import { ProductCard } from "./productCard";

export const ProductList = (props : {productList : Product[]}) => {
    return <div className="grid grid-cols-5 gap-4">
                {props.productList.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))} 
            </div>;
}
