import useSWR from "swr";
import { Cart } from "../types/cart";

export function useCart() {
  return useSWR<Cart>("/cart");
}