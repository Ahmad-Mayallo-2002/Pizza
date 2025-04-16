import { useDispatch } from "react-redux";
import { Pizza } from "./MenuSwiper";
import { addToCart } from "../redux/productsSlice";

export default function PizzaCard({
  name,
  image,
  price,
  description,
  id,
}: Pizza) {
  const pizza = { name, image, price, description, id };
  const dispatch = useDispatch();
  return (
    <div className="pizza p-4 rounded-lg shadow-2xl border-4 border-orange-500">
      <div className="head">
        <img src={image} alt={name} className="rounded-t-lg w-full h-[200px]" />
      </div>
      <div className="body my-2 text-center">
        <h3 className="text-2xl my-1">{name}</h3>
        <p>Price: {price}</p>
      </div>
      <div className="foor">
        <button
          onClick={() => dispatch(addToCart(pizza))}
          className="main-button w-full"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
