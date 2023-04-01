import React from "react"
import "../style/TopNav.css"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"

export default function TopNav ({addData, setAddData}){

    return<>
        <nav id="top-nav">
            <div id="nav-container">
              <h1 id="title">Shopsy Store</h1>
            <Link to="/product" > <h4 id="pro">Product</h4></Link>
              {/* <div id="adddd">{addData}</div> */}
             <Link to="/order"> <img src={logo}  id="logo"/></Link>
            </div>
        </nav>
    </>
}

