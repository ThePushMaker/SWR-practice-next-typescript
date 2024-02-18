import useSWR from "swr";
import { Cart } from "../types/cart";
import { User } from "../types/user";
import { Product } from "../types/product";
import { logger } from "../utils/logger";
import { Post } from "../types/post";

export function useUser() {
  return useSWR<User>("/user");
}

export function useCart() {
  
  const { data } = useUser();
  
  return useSWR<Cart>(data ? "/cart" : null);
}

export function useProducts() {
  return useSWR<Product[]>("/products", {use: [logger]});
}

export function usePost(pageIndex: number) {
  return useSWR<Post[]>(`/posts?_limit=3&_page=${pageIndex}`);
}