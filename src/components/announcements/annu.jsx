import React from "react"
const annu = () => {
    const mystyle={
        width:"40%",
    height:"340px",
    }
    const mystyle1={
        width:"88%",
    height:"340px",

    }
    
    return ( 
        <>
        <section className="annouc background">
            <div className="container d_flex">
                <div className="img" style={mystyle}>
                    <img src='./images/banner-1.avif' alt="" width='100%' height='55%'/>
                </div>
                <div className="img" style={mystyle1}>
                    <img src="./images/banner-2.avif" alt="" width="100%" height="55%"/>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default annu;