import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Shop from './pages/Shop';
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Shop",
    element: <Shop/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Blog",
    element: <Blog/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
