import React from "react";
import AllProducts from "./Components/AllProducts";
import Cart from "./Components/Cart";
import {BrowserRouter, Routes, Route} from "react-router-dom";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<AllProducts/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;