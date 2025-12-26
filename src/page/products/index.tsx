import PRODUCTS from "../../data/products";
import { ProductList } from "../../components/Products/ProductList";
import {  useState } from "react";
import { SearchFilter } from "../../components/Products/searhfilter";
import { CartModal } from "../../components/Products/cart";
import { useAppSeclector } from "../../store/hooks/customCart";

export const ProductHome = () => {

    const [productList, setProductList] = useState(PRODUCTS);
    const open = useAppSeclector((s) => s.cart.open);

    const SearchProduct = (nameProducts : string, nameCategory : string, value: string) => {

        let result = [...PRODUCTS];

        if (nameCategory !== "All") {
            result = result.filter(item => item.category === nameCategory);
        }
        const key = nameProducts.trim().toLowerCase();
        if (key) {
            result = result.filter(item =>
            item.name.toLowerCase().includes(key)
            );
        }

    switch (value) {
        case "asc":
        result.sort((a, b) => a.price - b.price);
        break;

        case "dsc":
        result.sort((a, b) => b.price - a.price);
        break;

        default:
        break;
    }

        setProductList(result);
    }
    const categoryList = ["All",...Array.from(

        new Set(PRODUCTS.map(item => item.category))
    )]
  return (
        <>
        <div className={open ? " bulr-sm pointer-events-none" : ""}>
            <div className="px-4 flex flex-col gap-4">
                <h1>Product List</h1>
                <SearchFilter onSearchProduct={SearchProduct}  category = {categoryList}/>
                <ProductList productList={productList}/>
            </div>
        </div>
        {open && <CartModal/>}
        </>
    )
}