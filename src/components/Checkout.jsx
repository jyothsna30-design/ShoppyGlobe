import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items || []);
  const [inputval,setinputval] = useState("");
  const [phone,setphoneval] = useState("");
  const [addressval,setaddressval] = useState("");
  const [emailval,setemailval] = useState("");

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
//if order placed then clear items and go to home page
  const placeOrder = () => {
    if(!inputval||!phone||!addressval||!emailval){alert("please fill the details");return;}
    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  };
  //calculate price and total amount
  return (<div className="flex flex-col md:flex-row">
    <div>
       <h2 className="text-2xl font-bold mb-4 ml-20">Enter your Details:</h2>
      <form className="border-2 rounded-lg w-75 md:w-100 m-2 md:ml-20 md:p-10">
       <b> Name:</b><br></br><input type="text" className="border-2 rounded-lg m-2 w-60 mb-2" onChange={(e)=>setinputval(e.target.value)} required></input><br></br>
        <b>Phone number:</b><br></br><input type="tel" className="border-2 rounded-lg m-2 w-60 mb-2" onChange={(e)=>setphoneval(e.target.value)} required></input><br></br>
        <b>Email:</b><br></br><input type="email" className="border-2 rounded-lg m-2 w-60 mb-2" onChange={(e)=>setemailval(e.target.value)} required></input><br></br>
        <b>Address:</b><br></br><textarea required className="border-2 rounded-lg m-2 w-60 h-20" onChange={(e)=>setaddressval(e.target.value)}></textarea>
      </form>
    </div>
    <div className="md:ml-20 border-2 rounded-lg mt-5 md:w-120 p-10">
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
    
    </div>
  );
}