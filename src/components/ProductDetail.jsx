import { useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
//fetches specific id product and renders when id changes 
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);
  //if product is empty then show Loading...
  if (!product) return <p>Loading...</p>;

  return (
  <div className="border-0 rounded-lg lg:ml-130 mt-20 w-150">
    <img className="h-70 w-70 bg-gray-300" src={product.thumbnail}></img>
  <h2>{product.title}</h2>
  <p className="text-xl font-semibold">${product.price}</p>
        <button className="border-2 mt-5 rounded-lg mr-2 hover:scale-105 w-60 bg-amber-300" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
        
  </div>)
}
