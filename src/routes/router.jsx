import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
const ProductDetail = React.lazy(()=> import ("../components/ProductDetail.jsx"));
const Cart = React.lazy(()=> import ("../components/Cart.jsx"));
const Checkout = React.lazy(()=> import ("../components/Checkout.jsx"));
const NotFound = React.lazy(()=> import ("../components/NotFound.jsx"));
const Layout = React.lazy(()=> import ("../components/Layout.jsx"));


export const router = createBrowserRouter([
  {
    //createbrowserrouter, it includes layout for all children components
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