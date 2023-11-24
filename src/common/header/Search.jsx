import React from "react"
import "./Header.css"
import logo from "../assets/images/Firstmind_Logo.jpg"
import {Link} from "react-router-dom"
 const Search =({cartItem})=>{
    window.addEventListener("scroll",function(){
        const search=document.querySelector(".search")
        search.classList.toggle("active",window.scrollY>100)
    })
    return (
        <>
           <section className="search">
            <div className="container c_flex">
                <div className="logo width">
                    <img src={logo} alt="" style={{width:"45px",height:"45px"}}/>
                    <div className="logoName" ><p className="logoText">Firstmind</p>
                    <p className="logoText">Creatives</p></div>
                </div>
                <div className="search-box f_flex">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search and hit enter ..."/>
                    <p>All Categories</p>
                </div>
                <div className="icon f_flex width">
                    <i className="fa fa-user icon_circle"></i>
                    <div className="cart">
                        <Link to="/cart">
                           <i className="fa fa-shopping-bag icon-circle"></i> 
                        <p>{cartItem.length===0 ? "" :cartItem.length}</p>
                        </Link>
                    </div>
                </div>
            </div>
           </section>
        </>
    )
 }
 export default Search