import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Suspense } from "react"
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
const ProductList = React.lazy(() => import("./components/ProductList"));


function App() {
  return (
    <>
     <ProductList></ProductList>
    </>
  );
}

export default App
