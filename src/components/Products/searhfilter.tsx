import { useState, type ChangeEvent } from "react"
import { useAppDispath, useAppSeclector } from "../../store/hooks/customCart";
import { openCart } from "../../store/slice/cartSilce";


export const SearchFilter = (props : {onSearchProduct: (nameProducts : string, nameCategory : string,value:string) => void , category : string[]}) => {
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("All");
const [valueSort, setValueSort] = useState("");
const count = useAppSeclector((s) => s.cart.count);
const dispath = useAppDispath();

const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    props.onSearchProduct(e.target.value,filter,valueSort);
}
const onChangeCategory = (e : ChangeEvent<HTMLSelectElement>) => {   
    const value = e.target.value;
    setFilter(value);
    props.onSearchProduct(search, value,valueSort);
}
const onChangePrice = (e : ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setValueSort(value);
    props.onSearchProduct(search, filter,value);
}
return (
    <div className="flex gap-4">
        <input className="px-4 border-black border-2" type="text" name="" id="" value={search} onChange={handleSearch}/>

        <select onChange={onChangeCategory} className="border-black border-2" name="category" id="category">
            {props.category.map( (item,index) => {
                return <option value={item} key={index}>{item}</option>
            })}
        </select>

        <select onChange={onChangePrice} className="border-black border-2">
            <option value="asc" id="asc">ASC</option>
            <option value="dsc" id="dsc">DSC</option>
            <option value="defaul" id="defaul">Default</option>
        </select>
        <div className="relative">
            <span className="absolute top-[-10px] right-0 rounded-full px-2  bg-amber-200">{count}</span>
            <button className="bg-red-400 px-4 py-2 rounded-2xl" onClick={() => dispath(openCart())}>Cart</button>
        </div>
        
    </div>
)
}