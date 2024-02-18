"use client";
import { usePost } from "../services/queries"

export default function Posts({ pageIndex }: { pageIndex: number}) {
  const {data, error, isLoading} = usePost(pageIndex);
  if (isLoading) return <p>Loading...</p>;
  if(error) return <p>Error</p>;
  
  return (
    <>
    <ul>
      {data?.map(post => (
        <li key={post.id}>
          <p>Title: {post.title}</p>
        </li> 
      ))}
    </ul>
    </>
  )
}