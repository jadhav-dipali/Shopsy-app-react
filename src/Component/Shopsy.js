import TopNav from "./TopNav"
import { useState } from "react"
import { Outlet } from "react-router-dom"



 export default function Shopsy(){
    return<>
    <div>
        <TopNav/>
        <Outlet/>
       
    </div>
    </>
}