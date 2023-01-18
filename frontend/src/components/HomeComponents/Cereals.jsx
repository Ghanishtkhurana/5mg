import React from 'react'
import axios from "axios"
import {backendSite} from "../backendSiteLink/backendSite"
import { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey",marginRight:"60px",
      marginTop:"5px",padding:"0px",borderRadius:"20px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props2) {
  const { className2, style2, onClick2 } = props2;
  return (
    <div
      className={className2}
      style={{ ...style2, display: "block", background: "black",marginLeft:"-30px" }}
      onClick={onClick2}
    />
  );
}





const Cereals = () => {
  const [data,setData]=React.useState([])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };



    const cerealsData=()=>{
        axios.get(`${backendSite}/cereal`)
          .then((res)=> {
            setData(res.data)
        console.log("cerealsData:",res.data);
     })
        .catch(function (error) {
         console.log(error);
     })
    }
    useEffect(()=>{
        cerealsData()
    },[])

  return (
    <div>
      <Slider {...settings}>
{
        data.map((item)=>(
            <div key={item.id} className="detailsCol">
            <img className="imagest" src={item.image} alt="offers"/>
<div style={{background:"white",marginTop:"-15px",width:"300px",height:"150px"}}>
            <div style={{background:"white"}}>
            <p style={{width:"300px",marginTop:"15px"}}>{item.description}</p>
            </div>
           
            <div style={{display:"flex",background:"white"}}>

            <p style={{marginLeft:"30px",marginTop:"30px"}} onClick={()=>
            alert(`${item.description}`)
            }>{item.title}</p>

            <button 
            style={{borderRadius:"30px",width:"100px",marginTop:"30px",marginLeft:"70px"}}>
            {item.des}</button>
            </div>
            </div>
            </div>
        ))
    }
</Slider>
   
    </div>
  )
}

export default Cereals
