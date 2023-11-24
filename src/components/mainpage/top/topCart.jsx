import React from "react";
import Tdata from "./Tdata";
import "./style.css";
import Slider from "react-slick";


const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };
    return ( 
        <>
        <Slider {...settings}>
        {Tdata.map((value,index) => {
        return(
            <>
            <div className="box product" key={index}>
                <div className="nametop d_flex">
                    <span className="tleft">{value.para}</span>
                    <span className="tright">{value.desc}</span>
                </div>
                <div className="img">
                <img src={value.cover} alt="" style={{height:"25vh",width:"25vh"}}></img>
                </div>
            </div>
            </>
        )
      })
        } 
        </Slider>
        </>
     );
}
 
export default TopCart;