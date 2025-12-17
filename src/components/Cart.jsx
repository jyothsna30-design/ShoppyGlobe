import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useSelector(state => state.cart.items||[]);

  if(items.length===0){
    return <p className="text-center text-xl mt-10">Your cart is empty</p>;
  }
  return (
     <>
    <div className="flex flex-wrap" >
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
     <div className="border-0 p-1 rounded-lg w-30 ml-130 mt-9 underline text-xl bg-amber-600" >
    <Link to="/checkout">Checkout</Link>
    </div>
  </>)
  
}
