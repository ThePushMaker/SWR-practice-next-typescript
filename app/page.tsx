import Old from "./components/Old";
import Posts from "./components/Posts";
import Cart from "./components/Cart";
import Products from "./components/Products";
import PostWrapper from "./components/PostWrapper";
import Todos from "./components/Todos";

export default function Home() {
  return (
    <div>
    {/* fetch sin SWR */}
      {/* <Old /> */}
      
      {/* fetch con SWR */}
      {/* <Cart /> */}
      
      {/* optimistic UI al añadir productos */}
      {/* <Products /> */}
      
      {/* paginación */}
      {/* <Posts /> */}
      
      {/* infinite scrolling */}
      {/* <PostWrapper /> */}
      <Todos />
    </div>
  );
}
