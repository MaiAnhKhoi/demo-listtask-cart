import {type Product } from "../types/products";

const PRODUCTS: Product[] = [
  { id: "p1", name: "Basic Tee", price: 120000, category: "shirt", inStock: true },
  { id: "p2", name: "Slim Jeans", price: 350000, category: "pants", inStock: true },
  { id: "p3", name: "Running Shoes", price: 800000, category: "shoes", inStock: false },
  { id: "p4", name: "Leather Belt", price: 150000, category: "accessory", inStock: true },
  { id: "p5", name: "Oversize Hoodie", price: 420000, category: "shirt", inStock: true },
];
export default PRODUCTS;