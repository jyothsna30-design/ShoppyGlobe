import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductDetail from "../components/ProductDetail.jsx";
import Cart from "../components/Cart.jsx";
import Checkout from "../components/Checkout.jsx";
import NotFound from "../components/NotFound.jsx";
import Layout from "../components/Layout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    errorElement: <NotFound />,
    children: [
      {index:true, element: <App />},
      { path: "product/:id", element: <ProductDetail /> },
  { path: "cart", element: <Cart /> },
  { path: "checkout", element: <Checkout /> },
    ]
  },
  
]);