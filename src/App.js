import React from "react";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext";

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
        path:"/fix",
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
      <ScrollProvider>
        <RouterProvider router={router} />
      </ScrollProvider>
      
    </div>

  );
}

export default App;
