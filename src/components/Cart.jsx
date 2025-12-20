import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { Suspense } from "react"

const CartItem = React.lazy(() => import("./CartItem"));

function Cart() {
  //getting cart items
  const items = useSelector(state => state.cart.items||[]);

  //if items length is 0 then display your cart is empty
  if(items.length===0){
    return <p className="text-center text-xl mt-10">Your cart is empty</p>;
  }
  return (
     <>{/*sending props to cartItem*/}
    <div className="flex flex-wrap" >
      {items.map(item => (
        <Suspense key={item.id} fallback={<p>Loading....</p>}>
        <CartItem key={item.id} item={item} /></Suspense>
      ))}
    </div>
        {/*link to checkout*/}
     <div className="border-0 p-1 rounded-lg w-30 md:ml-130 mt-9 underline text-xl bg-amber-600 " >
    <Link to="/checkout">Checkout</Link>
    </div>
  </>)
  
}
export default Cart;
