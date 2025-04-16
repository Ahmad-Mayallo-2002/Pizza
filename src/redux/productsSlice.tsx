import { createSlice } from "@reduxjs/toolkit";
import { Pizza } from "../components/MenuSwiper";
import { addProduct, removeProduct } from "../assets/functions";

type InitialState = {
  cart: Pizza[];
};

const initialState: InitialState = {
  cart: JSON.parse(localStorage.getItem("cart") as string) || [],
};

const cartSlice = createSlice({
  name: "cart-slice",
  initialState,
  reducers: {
    addToCart: (state, action) =>
      addProduct(
        state.cart,
        action.payload,
        "This Pizza is Already in Cart",
        "cart"
      ),
    removeFromCart: (state, action) => {
      let finalProducts = removeProduct(
        state.cart,
        action.payload,
        "This Pizza is not in Cart",
        "cart"
      );
      state.cart = finalProducts as Pizza[];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
