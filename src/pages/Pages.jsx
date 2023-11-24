import React from "react"
import Home from "../components/mainpage/Home"
import FlashDeals from "../components/flashDeals/FlashDeal"
import TopCate from "../components/mainpage/top/topCate"
import NewArrivals from "../components/mainpage/newarrivals/newArrivals"
import Discount from "../components/discount/Discount"
import Annu from "../components/announcements/annu"
import Shop from "../components/shop/shop"
import Wrapper from "../components/wrapper/wrapper"
const Pages=({productItems,cartItem,addToCart,shopItems})=>{
    
    return(
        <>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        <Annu/>
        <Wrapper/>
        </>
    )
}
export default Pages