//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import './index.css'
import App from './App.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     //errorElement: <ErrorPage />,
//   },
//   // {
//   //   path: "slider/",
//   //   element: <Slider />,
//   // },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
