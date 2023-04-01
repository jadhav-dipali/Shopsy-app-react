import React from "react"
import "../style/TopNav.css"
import logo from "../Images/logo.png"
export default function TopNav (){
    return<>
        <nav id="top-nav">
            <div id="nav-container">
              <h1 id="title">Shopsy Store</h1>
              <h4 id="pro">Product</h4>
              <img src={logo}  id="logo"/>
            </div>
        </nav>
    </>
}

