import useSWR from "swr";
import { Cart } from "../types/cart";
import { User } from "../types/user";
import { Product } from "../types/product";
import { logger } from "../utils/logger";
import { Post } from "../types/post";
import useSWRInfinite from "swr/infinite";
import { todo } from "../types/todo";

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

export function useTodos() {
  const getKey = (pageIndex: number, previousPageData: Todo[]) => {
    // valida que exista previousPageData y que su tamaño no sea null
    if (previousPageData && !previousPageData.length) return null;
    return `/todos?_page=${pageIndex + 1}&_limit=3`;
  };
  
  return useSWRInfinite<todo[]>(getKey);
}