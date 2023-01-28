import React, { Component } from 'react'
import Navbar from "../components/Navbarcomponet/DefaultNavbar"

const DefaultLayoutHoc = 
(Component)=>
({...props})=>{
    return (
        <div>
            <Navbar />
            <Component {...props} />
            <div>Footer</div>
        </div>
    )
}

export default DefaultLayoutHoc