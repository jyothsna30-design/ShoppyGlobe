import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart?.items || []);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = () => {
    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  };

  return (<>
    <div className="ml-20 border-2 rounded-lg mt-5 w-180 p-10">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {items.map(item => (
        <div key={item.id} className="flex justify-between">
          <p>{item.title} x {item.quantity}</p>
          <p>${item.price * item.quantity}</p>
        </div>
      ))}
      <p className="mt-4 font-bold">Total: ${Math.round(total)}</p>
      <button onClick={placeOrder} className="mt-4 bg-green-500 text-white p-2 rounded">
        Confirm Order
      </button>
    </div>
    
    </>
  );
}