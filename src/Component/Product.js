 import React, { useEffect, useState } from "react"
 import TopNav from "./TopNav"
 import "../style/Product.css"
 
 
 export default function Product({addData, setAddData}){
    let [shopData, setShopData]=useState([]);
    let [filterData , setFilterData] = useState(null);
    useEffect(()=>{
     fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
      .then(res=>res.json())
      .then(data=>setShopData(data));
    },[])
    // console.log(shopData);
  function redFunction(e){
   const color= shopData.filter(m=>m.color===e.target.id);
   const type= shopData.filter(m=>m.type===e.target.id);
   const gender =shopData.filter(m=>m.gender===e.target.id)
  

   if(color.length!==0){
    setFilterData(color)
   }if(type.length!==0){
    setFilterData(type)
   }if(gender.length!==0){
    setFilterData(gender)
   }
  }

 function priceFilter(e){

    let [min , max] = e.target.id.split("-").map(Number);
    const priceless= shopData.filter(m=>m.price>=min&&m.price<=max);
    const pricemid=shopData.filter(m=>m.price>=min&&m.price<=max)
    const priceheigh=shopData.filter(m=>m.price>=min)
        if(priceless){
        setFilterData(priceless)
        }if(pricemid){
            setFilterData(pricemid) 
        }if(priceheigh){
            setFilterData(priceheigh) 
        }
    

 }

    return <>
    <TopNav/>
    <div id="main-container">
        <aside id="aside">
            <div id="aside-container">
            <h4 className="data-product">Color</h4>
            <input type="checkbox" onClick={redFunction} id="Red"></input><label>red</label><br/>
            <input type="checkbox" onClick={redFunction} id="Blue"></input><label>blue</label><br/>
            <input type="checkbox" onClick={redFunction} id="Green" ></input><label>green</label>

            <h4 className="data-product">Gender</h4>
            <input type="checkbox" onClick={redFunction} id="Men" ></input><label>Male</label><br/>
            <input type="checkbox" onClick={redFunction} id="Women" ></input><label>Female</label>
            
            <h4 className="data-product">Price</h4>
            <input type="checkbox" onClick={priceFilter} id="0-250" ></input><label>0-250</label><br/>
            <input type="checkbox" onClick={priceFilter} id="251-450" ></input><label>251-450</label><br/>
            <input type="checkbox" onClick={priceFilter} id="450" ></input><label>450</label>

            <h4 className="data-product">Type</h4>
            <input type="checkbox"onClick={redFunction} id="Polo"></input><label>Polo</label><br/>
            <input type="checkbox" onClick={redFunction} id="Hoodie" ></input><label>Hoodie</label><br/>
            <input type="checkbox" onClick={redFunction} id="Basic" ></input><label>Basic</label>
            </div>

        </aside>
        <div id="section">
          
        {filterData? filterData.length===0? "No Result Found" : filterData.map(data=>{

            console.log(data)
            return <>
                 <div id="card">
            
            <h4 id="brand">{data.name}</h4>
         
            <div id="image-container">
              <img src={data.imageURL}  id="img-item"/>
            </div>
            <div id="price-container">
                <h3>{`RS ${data.price}`}</h3>
                <button id="btn" >Add To Card</button>
            </div>
        
        </div>
            </>
        }):shopData.map(data=>{
            return <>
                 <div id="card">
            
            <h4 id="brand">{data.name}</h4>
         
            <div id="image-container">
              <img src={data.imageURL}  id="img-item"/>
            </div>
            <div id="price-container">
                <h3>{`RS ${data.price}`}</h3>
                <button id="btn" >Add To Card</button>
            </div>
        
        </div>
            </>
        })
        
        } 
        
        </div>
    </div>
    </>
}