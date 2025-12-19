import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { router } from "./routes/router";

createRoot(document.getElementById('root')).render(
  //Makes the store available to the entire app
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
