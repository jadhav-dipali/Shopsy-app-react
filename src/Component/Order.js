import React, { useContext } from "react"
import TopNav from "./TopNav"
import "../style/Order.css"
import { NotiContext } from "../Context/ContextProduct"

export default function Order(){
    let {addProduct,setAddProduct} = useContext(NotiContext)
    console.log(addProduct)
    let sum = 0;

    function deleteFunction(id){
      setAddProduct(addProduct.filter(t=>t.id!==id))
    }
    return<>
    
    <h1 id="name-cart"><i>Shoping Cart</i></h1>
    <div id="Order-container">
     {addProduct.map((data , ind)=>{
        {sum+=data.price}
        return<div key={ind} id="order-div">
            <div id="order-img-cont">
            <img src={data.imageURL} id="order-img"/>
            </div>
         
           <div id="name-price-cont">
            <h4 id="name-order">{data.name}</h4>
            <h3 id="price-order">{`RS ${data.price}`}</h3>
            
           </div>
           <button id="delete-Order" onClick={()=>deleteFunction(data.id)}>Delete</button>
        </div>
      
     })}
     <hr></hr>
 <div>
    <h4 id="total">Total Amount = {`RS ${sum}`}</h4>
 </div>
    </div>
    </>
}