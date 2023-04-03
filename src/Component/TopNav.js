import React, { useContext } from "react"
import "../style/TopNav.css"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"
import {NotiContext} from "../Context/ContextProduct"

export default function TopNav (){

   const {num,setNum}= useContext(NotiContext)
  
    return<>
   
        <nav id="top-nav">
            <div id="nav-container">
              <h1 id="title">Shopsy Store</h1>
              <Link to="/product" > <h4 id="pro">Product</h4></Link>
              <Link to="/order"><div   id="logo-container"> <img src={logo}  id="logo" onClick={()=>setNum(null)}/>{num&&<div id="adddd">{num}</div>}</div></Link>
            </div>
        </nav>
    </>
}

