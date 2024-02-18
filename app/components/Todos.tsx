'use client';
import { useTodos } from "../services/queries"

export default function Todos() {
  const { data, setSize, size } = useTodos();
  
  if (!data) return "Loading...";
  
  return(
    <>
      {data.map(todos => {
        return todos.map(todo => <div key={todo.id}>
          {todo.title}
        </div>);
      })}
      <button onClick={() => setSize(size + 1)}>Load more</button>
    </>
  )
}