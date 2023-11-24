import React from "react"
import Ddata from "./Ddata";
import Slider from "react-slick";
const Dcard = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        marign:20,
       
      };
    return ( 
        <>
        <div className="content">
        <Slider {...settings}>
    {Ddata.map((val,index)=>
    {
return(
    <>
    <div className="product" key={index}>
           <div className="box">
        <div className="img">
            <img src={val.cover} alt=""/>
        </div>
        <h4>{val.name}</h4>
        <p>{val.price}</p>
    </div>
    </div>
    </>
)
    }
    )}
      </Slider>
      </div>
        
        </>
     );
}
 
export default Dcard;