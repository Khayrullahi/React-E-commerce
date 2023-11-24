import React from "react"
const Catg = () => {
    const data = [
        {
          cateImg: "./images/category/Bag1.jpg",
          cateName: "Bag",
        },
        {
          cateImg: "./images/category/Eleko1.png",
          cateName: "Eleko",
        },
        {
          cateImg: "./images/category/Silk1.png",
          cateName: "Silk",
        },
        {
          cateImg: "./images/category/Shirt1.png",
          cateName: "Shirt",
        },
        {
          cateImg: "./images/category/Kaftan1.jpg",
          cateName: "Kaftan",
        },
        {
          cateImg: "./images/category/Hoodie1.png",
          cateName: "Hoodie",
        },
      ]
    return ( 
        <>
            <div className="category">
                <div className="chead d_flex">
                    <h1>Brands</h1>
                    <h1>Shops</h1>
                </div>
                {
                    data.map((value,index)=>{
                        return(
                            <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt=""style={{height:"24px",width:"24px"}}/>
                            <p>{value.cateName}</p>
                            </div>
                        )
                    })
                }
             <div className="box box2">
                <button>View All Brands</button>
             </div>
            </div>
        </>
     );
}
 
export default Catg;