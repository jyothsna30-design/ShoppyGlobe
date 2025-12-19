import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../features/cart/cartSlice";



 function CartItem({ item }) {
  const dispatch = useDispatch();
//increase quantity of a product in cart
  const increaseQty = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };
 //decrease quantity of a product in cart
  const decreaseQty = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  return (
    <div className="ml-10 mt-5 flex border-2 rounded-lg">
      {/* Product Image on lazy loading */}
      <img
        src={item.thumbnail}
        alt={item.title}
        loading="lazy" className="bg-gray-300 w-50 h-50 mr-10"
      />

      {/* Product title and price */}
      <div>
        <h4 className="font-bold mt-3">{item.title}</h4>
        <p className="font-bold mt-3">Price: ${item.price}</p>

        {/* increment and decrement buttons */}
        <div>
          <button className="border-2 rounded-lg mr-2" onClick={decreaseQty}>−</button>
          <span>{item.quantity}</span>
          <button className="border-2 rounded-lg ml-2" onClick={increaseQty}>+</button>
        </div>

        {/* Remove from cart */}
        <button
          className="border-2 rounded-lg mt-2"
          onClick={() =>{dispatch(removeFromCart(item.id)); }}
        >
          Remove
        </button>
      </div>
      
    </div>
  )
}

export default CartItem