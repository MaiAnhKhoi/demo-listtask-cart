import {  useMemo, } from "react";
import { useAppDispath, useAppSeclector } from "../../store/hooks/customCart";
import { closeCart, updateToCart } from "../../store/slice/cartSilce";

export const CartModal = () => {

  const cart = useAppSeclector((s)=> s.cart.cartItem)
  const dispath = useAppDispath();

  const result = useMemo (() => {
    return cart.reduce((acc,current) => {
      return acc + current.item.price * current.quanty;
    },0)
  },[cart])
  // useEffect(() => {
  //   const result = cart.reduce((acc, current) => {
  //     return acc + current.item.price * current.quanty;
  //   }, 0);
  //   setTotal(result);
  // }, [cart]);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => dispath(closeCart())}
      />

      {/* Modal */}
      <div
        className="
          fixed z-50
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          bg-white
          w-[80%] max-w-[900px]
          p-6
          rounded-lg
          shadow-xl
          max-h-[80vh]
          overflow-y-auto
        "
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Giỏ hàng</h1>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => dispath(closeCart())}
          >
            Close
          </button>
        </div>

        {/* Cart list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cart.map((item) => (
            <div
              key={item.item.id}
              className="bg-gray-100 p-4 rounded shadow"
            >
              <h2 className="font-semibold">{item.item.name}</h2>
              <p>Price: {item.item.price}</p>
              <p>Quantity: {item.quanty}</p>

              <div className="flex gap-2 my-2">
                <button
                  className="px-4 py-1 bg-black rounded text-white"
                  onClick={() => dispath(updateToCart({
                    products : item.item,
                    value : "+",
                  }))}
                >
                  +
                </button>
                <button
                  className="px-4 py-1 bg-black rounded text-white"
                  onClick={() => dispath(updateToCart({
                    products : item.item,
                    value : "-"
                  }))}
                >
                  -
                </button>
              </div>

              <p className="font-medium">
                TotalItem: {item.item.price * item.quanty}
              </p>

              <button
                className="mt-2 px-4 py-1 bg-red-600 rounded text-white"
                onClick={() => dispath(updateToCart({
                  products : item.item,
                  value : "remove",
                }))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-right font-bold text-lg">
          Total: {result}
        </div>
      </div>
    </>
  );
};
