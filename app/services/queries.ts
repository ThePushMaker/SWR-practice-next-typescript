import useSWR from "swr";
import { Cart } from "../types/cart";
import { User } from "../types/user";
import { Product } from "../types/product";

export function useUser() {
  return useSWR<User>("/user");
}

export function useCart() {
  
  const { data } = useUser();
  
  return useSWR<Cart>(data ? "/cart" : null);
}

export function useProducts() {
  return useSWR<Product[]>("/products");
}