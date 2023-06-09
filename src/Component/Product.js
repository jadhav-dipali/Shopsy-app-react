 import React, { useContext, useEffect, useState } from "react"
 import TopNav from "./TopNav"
 import "../style/Product.css"
 import{NotiContext} from "../Context/ContextProduct"
 
 
 export default function Product(){
    let [shopData, setShopData]=useState([]);
    let [search ,setSearch] = useState("")
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

    const priceless= shopData.filter(m=> m.price>=min && m.price<=max);
    const pricemid=shopData.filter(m=>m.price>=min&&m.price<=max)
    const priceheigh=shopData.filter(m=>m.price>=min)
        if(priceless){
        setFilterData(priceless)
        }if(pricemid){
            setFilterData(pricemid)
        }
        if(priceheigh){
            setFilterData(priceheigh)
        }
 }

const {num,setNum,addProduct,setAddProduct}= useContext(NotiContext);
// const num =useContext(NotiContext);

 function AddToCard(id){
    setNum(num+1)
   let ans= shopData.find(e=>e.id===id);
   setAddProduct(d=>[...d,ans]);

      
 }


 function Search(){
    
   const search_regex= shopData.filter(e=>new RegExp(e.name.slice(0,4), 'i').test(search));
   console.log(search)
   setFilterData(search_regex)
   setSearch("")
 }
 

    return <>
    <div id="search-container">
    <input type="text" placeholder="Search by Name..."  id="search-input-feild" onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
    <img src="https://cdn.icon-icons.com/icons2/3392/PNG/512/small_search_icon_213735.png" id="search-icon" onClick={Search} />
    </div>
   
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
          
        {filterData? filterData.length===0? "No Result Found" : filterData.map((data,i)=>{
            return <div id="card" key={i}>
            
            <h4 id="brand">{data.name}</h4>
         
            <div id="image-container">
              <img src={data.imageURL}  id="img-item"/>
            </div>
            <div id="price-container">
                <h3>{`RS ${data.price}`}</h3>
                <button id="btn" onClick={()=>AddToCard(data.id)}>Add To Card</button>
            </div>
        
        </div>
        
        }):shopData.map((data , i)=>{
            return <div id="card" key={i}>
            
            <h4 id="brand">{data.name}</h4>
         
            <div id="image-container">
              <img src={data.imageURL}  id="img-item"/>
            </div>
            <div id="price-container">
                <h3>{`RS ${data.price}`}</h3>
                <button id="btn" onClick={()=>AddToCard(data.id)} >Add To Card</button>
            </div>
        
        </div>
        })
        
        } 
        
        </div>
    </div>
    </>
}