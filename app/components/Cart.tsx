"use client";
import { useCart } from "../services/queries"; 

export default function Cart() {
  const cartQuery = useCart();
  
  return (
    <div>
      {cartQuery.data?.totalCost}
    </div>
  )
}