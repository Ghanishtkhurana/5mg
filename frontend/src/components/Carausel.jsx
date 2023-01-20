import React, { Component } from "react";
import Slider from "react-slick";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

    const Carausel =({url})=>{
const [data,setData] = useState("")
console.log(url)

const Getdata=()=>{
    axios.get(`http://localhost:4001/${url}`)
    .then((res)=>setData(res.data))
    .catch((err)=>{
        console.log(err)
    })
}

useEffect(()=>{
    Getdata()
},[])
console.log(data)
     
          var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
          return (
            <div    style={{   width:"95%",height:"400px", margin:"auto", marginTop:"50px", marginBottom:"50px"}}>
              
              <Slider {...settings}>
              
                  {
                    data.length >0 && data.map((item)=>{
                        return <div key={item._id} >

                            <div  style={{border:"1px solid transparent",borderRadius:"10px"  , width:"90%" ,height:"300px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" ,textAlign:"center", marginTop:"70px" }}>
                            <img  src={item.herbImage} style={{width:"100%"}}   />
                            <h4  >{item.name}</h4>
                            <p>{item.smalldes}</p>
                            </div>

                        </div>
                    })
                  }
                
               
              </Slider>
            </div>
          );
        
      }


export {Carausel}