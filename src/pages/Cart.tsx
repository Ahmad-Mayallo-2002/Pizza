import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { removeFromCart } from "../redux/productsSlice";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    let totalPrice: number = 0;
    for (const pizza of cart) totalPrice += pizza.price;
    setTotalPrice(totalPrice);
  }, [cart]);
  return (
    <>
      <main className="cart py-24 min-h-[calc(100vh-102px-80px)]">
        <div className="container">
          <h2 className="main-heading">My Cart</h2>
          {!cart.length ? (
            <>
              <h2 className="text-center text-4xl text-orange-500">
                My Cart is Empty
              </h2>
            </>
          ) : (
            <>
              <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="pizza p-4 rounded-lg shadow-2xl border-4 border-orange-500"
                  >
                    <div className="head">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-t-lg w-full h-[200px]"
                      />
                    </div>
                    <div className="body my-2 text-center">
                      <h3 className="text-2xl my-1">{product.name}</h3>
                      <p>Price: {product.price}</p>
                    </div>
                    <div className="foor">
                      <button
                        onClick={() => dispatch(removeFromCart(product))}
                        className="main-button !bg-red-500 hover:!bg-red-600 w-full"
                      >
                        Remove From Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="my-12 text-orange-500 font-bold text-center text-3xl">
                Total Price: {totalPrice.toFixed(2)}$
              </p>
            </>
          )}
        </div>
      </main>
    </>
  );
}
