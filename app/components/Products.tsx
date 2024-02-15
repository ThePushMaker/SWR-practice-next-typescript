"use client";
import { useState } from "react";
import { useProducts } from "../services/queries"
import { axiosInstance } from "../services/fetcher";

export default function Products () {
  const {data, mutate} = useProducts();
  
  const [inputValue, setInputValue] = useState("");
  const handleUpdateInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  
  const handleCreateProduct = async() => {
    await axiosInstance.post('/products', {title: inputValue});
    mutate();
  }
  
  return (
    <>
      <p>Products:</p>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <input placeholder="Product title"
        value={inputValue}
        onChange={handleUpdateInputValue}
      />
      <button onClick={handleCreateProduct}>Create</button>
    </>
  )
}