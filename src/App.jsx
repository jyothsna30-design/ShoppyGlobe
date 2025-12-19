import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react"
//LazyLoading of productlist
const ProductList = React.lazy(() => import("./components/ProductList"));


function App() {
  return (
    <>
     <ProductList></ProductList>
    </>
  );
}

export default App
