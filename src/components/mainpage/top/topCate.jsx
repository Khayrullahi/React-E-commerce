import React from "react"
import TopCart from "./topCart"
const TopCate = () => {
    return (
        <>
        <section className="topCat background">
<div className="container">
    <div className="heading d_flex">
        <div className="heading-left row f_flex">
        <i class="fa fa-border-all"></i>
            <h2>Top Category</h2>
        </div>
        <div className="heading-right row">
            <p>View all</p>
            <i className="fa fa-caret-right"></i>
        </div>
    </div>
    <TopCart/>
</div>
        </section>
        </>
      );
}
 
export default TopCate ;