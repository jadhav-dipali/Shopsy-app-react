 import React, { useEffect, useState } from "react"
 import TopNav from "./TopNav"
 import "../style/Product.css"
 
 
 export default function Product(){
    let [shopData, setShopData]=useState([])
    useEffect(()=>{
     fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
      .then(res=>res.json())
      .then(data=>setShopData(data));
    },[])
    console.log(shopData);
    return <>
    <TopNav/>
    <div id="main-container">
        <aside id="aside">
            <div id="aside-container">
            <h4 className="data-product">Color</h4>
            <input type="checkbox" ></input><label>red</label><br/>
            <input type="checkbox" ></input><label>blue</label><br/>
            <input type="checkbox" ></input><label>green</label>

            <h4 className="data-product">Gender</h4>
            <input type="checkbox" ></input><label>Male</label><br/>
            <input type="checkbox" ></input><label>Female</label>
            
            <h4 className="data-product">Price</h4>
            <input type="checkbox" ></input><label>0-250</label><br/>
            <input type="checkbox" ></input><label>251-450</label><br/>
            <input type="checkbox" ></input><label>450</label>

            <h4 className="data-product">Type</h4>
            <input type="checkbox" ></input><label>Polo</label><br/>
            <input type="checkbox" ></input><label>Hoodie</label><br/>
            <input type="checkbox" ></input><label>Basic</label>
            </div>

        </aside>
        <div id="section">
        {shopData.map(data=>{
            return <>
                 <div id="card">
            
            <h4 id="brand">{data.name}</h4>
         
            <div id="image-container">
              <img src={data.imageURL}  id="img-item"/>
            </div>
            <div id="price-container">
                <h3>{`RS ${data.price}`}</h3>
                <button id="btn">Add To Card</button>
            </div>
        
        </div>
            </>
        })} 
        
        </div>
    </div>
    </>
}