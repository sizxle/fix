import React from "react";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet,ScrollRestoration } from "react-router-dom";

const Layout=()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/BookRepair",
        element:<Book/>,
      }
    ],
  },
])

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
