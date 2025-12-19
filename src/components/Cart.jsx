import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

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
        <CartItem key={item.id} item={item} />
      ))}
    </div>
        {/*link to checkout*/}
     <div className="border-0 p-1 rounded-lg w-30 ml-130 mt-9 underline text-xl bg-amber-600" >
    <Link to="/checkout">Checkout</Link>
    </div>
  </>)
  
}
export default Cart;
