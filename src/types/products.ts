export type Product = {
  id: string;
  name: string;
  price: number;
  category: "shirt" | "pants" | "shoes" | "accessory";
  inStock: boolean;
};
export type Cart = {
  item : Product;
  quanty : number;
}