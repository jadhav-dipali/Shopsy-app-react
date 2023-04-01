import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Order from "./Order";
import Shopsy from "./Shopsy";





export default function AppRouter(){
    return<>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Shopsy/>}>    </Route>
          <Route path="product" element={<Product/>}/>
          <Route path="/order" element={<Order/>}/>
       
         
       </Routes>
    </BrowserRouter>
    </>
}