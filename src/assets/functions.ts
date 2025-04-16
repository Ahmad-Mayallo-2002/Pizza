import { toast } from "react-toastify";
import { Pizza } from "../components/MenuSwiper";

function addProduct(
  products: Pizza[],
  payload: Pizza,
  message: string,
  name: string
) {
  const product = products.findIndex((current) => current.id === payload.id);
  if (product !== -1) {
    toast.error(message, { position: "top-right" });
    return;
  }
  products.push(payload);
  toast.success("Pizza is Added", { position: "top-right" });
  localStorage.setItem(name, JSON.stringify(products));
}

function removeProduct(
  products: Pizza[],
  payload: Pizza,
  message: string,
  name: string
): Pizza[] | void {
  const product = products.findIndex((current) => current.id === payload.id);
  if (product === -1) {
    toast.error(message, { position: "top-right" });
    return;
  }
  let newProducts = products.filter((product) => product.id !== payload.id);
  localStorage.setItem(name, JSON.stringify(newProducts));
  toast.success("Pizza is Removed", { position: "top-right" });
  return newProducts;
}

export { addProduct, removeProduct };
