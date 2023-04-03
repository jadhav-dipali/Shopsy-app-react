import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Order from "./Order";
import Shopsy from "./Shopsy";
import Home from "./Home";





export default function AppRouter(){
    return<>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Shopsy/>}>  
         <Route path="/" element={<Home/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="/order" element={<Order/>}/>
          </Route>
       
         
       </Routes>
    </BrowserRouter>
    </>
}