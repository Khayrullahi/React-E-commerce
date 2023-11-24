import React from "react"
const Categories = () => {
const data=[
        {
            cateImg: "./images/category/Shirt1.png",
            cateName:"Adire Shirt"
        },
        {
            cateImg:"./images/category/Tshirt1.png",

            cateName: "Adire T-Shirt",
          },
          {
            cateImg:"./images/category/Fabric1.jpg",
            cateName: "Adire Fabric",
          },
          {
            cateImg:"./images/category/Fabric2.jpg",
            cateName: "Batik Fabric",
          },
          {
            cateImg:"./images/category/Silk1.png",
            cateName: "Adire Silk",
          },
          {
            cateImg:"./images/category/Eleko1.png",
            cateName: "Adire Eleko",
          },
          {
            cateImg:"./images/category/Alaro1.jpg",
            cateName: "Adire Alaro Dudu",
          },
          {
            cateImg:"./images/category/BatikShirt1.jpg",
            cateName: "Batik Shirt",
          },
          {
            cateImg:"./images/category/Hoodie1.png",
            cateName: "Adire Hoodies",
          },
          {
            cateImg:"./images/category/Kaftan1.jpg",
            cateName: "Printed Adire Top ",
          },
          {
            cateImg:"./images/category/Bag1.png",
            cateName: "Adire Bag ",
          }
    ]
    return (
        <>
           <div className="category">
            {data.map((value,index)=>{
                return(
                  <div className="box f_flex" key={index}>
                    <img src={value.cateImg} alt=""/>
                    <p>{value.cateName}</p>
                  </div>
                )
            })
            }
           </div>
        </>
     );
}
 
export default Categories
;