import React from "react"
import Ndata from "./Ndata"

const Cart = () => {
    return (  
        <>
       <div className="content grid product">
    {Ndata.map((val,index)=>
    {
return(

    <div className="box key={index}">
        <div className="img">
            <img src={val.cover} alt=""/>
        </div>
        <h4>{val.name}</h4>
        <p>{val.name}</p>
    </div>

)
    }
    )}
        </div>
        </>
    );
}
 
export default Cart;