"use client";
import { useState } from "react";
import { useProducts } from "../services/queries"
// import { axiosInstance } from "../services/fetcher";
import { useCreateProduct } from "../services/mutations";

export default function Products () {
  const {data, isValidating} = useProducts();
  // const {data, mutate} = useProducts();
  const {trigger, isMutating} = useCreateProduct();
  
  const [inputValue, setInputValue] = useState("");
  const handleUpdateInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  
  const handleCreateProduct = async() => {
    // await axiosInstance.post('/products', {title: inputValue});
    // mutate();
    
    trigger({ title: inputValue }, 
    {
      optimisticData: data && [
        ...data, { title: `${inputValue} (optimistic data)` }],
      rollbackOnError: true,
    });
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
      <button 
        onClick={handleCreateProduct} 
        disabled={isMutating || isValidating}
      >
        {isMutating || isValidating ? 'Creating...' : 'Create Product'}
      </button>
    </>
  )
}