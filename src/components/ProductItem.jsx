import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
   
  


  return (<>
         <div className="border-0 rounded-lg m-5 hover:scale-110 w-50 h-60">
      <img loading="lazy" src={product.thumbnail} className="h-30  bg-gray-300"/>
      <h5>{product.title}</h5>
      <p className="text-xl font-semibold">${product.price}</p>
      <button className="border-2 rounded-lg mr-2 hover:scale-105 bg-amber-300" onClick={() =>{alert("Item added to cart"); dispatch(addToCart(product))}}>
        Add to Cart
      </button>
      <Link className="border-2 rounded-lg bg-gray-200" to={`/product/${product.id}`}>View</Link>
      </div>
</>
   
     
    
  );
}