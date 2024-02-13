"use client";
import { useEffect, useState } from "react";
import { Post } from "../types/post";

export default function Old() {
  const [posts, setPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [])
  
  if (!posts) return <p>Loading...</p>;
  
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
} 