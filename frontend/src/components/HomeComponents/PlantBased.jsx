import React from 'react'
import axios from "axios"
import {backendSite} from "../backendSiteLink/backendSite"
import { useEffect } from 'react'
import { Box,Image,Text,Button } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style,display: "block", background: "grey",marginRight:"25px",borderRadius:"50px",
      paddingTop:"12px",width:"40px",height:"40px",marginTop:"-20px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey",marginLeft:"25px",borderRadius:"50px",
      paddingTop:"12px",width:"40px",height:"40px",marginTop:"-30px"}}
      onClick={onClick}
    />
  );
}


const PlantBased = () => {
  const [data,setData]=React.useState([])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };



    const plantsBasedData=()=>{
        axios.get(`${backendSite}/plant`)
          .then((res)=> {
            setData(res.data)
        console.log("plantsBasedData:",res.data);
     })
        .catch(function (error) {
         console.log(error);
     })
    }
    useEffect(()=>{
        plantsBasedData()
    },[])
  return (
    <div>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h1 style={{margin:"15px"}}>Plant based supplements</h1>
    <button style={{height:"30px",marginTop:"30px",background:"#FF6F61",color:"white",borderRadius:"5px",margin:"15px",
    border:"0px"
    }}>See All</button>
    </div>
    <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
    <Slider {...settings}>
  {
    data.map((item)=>(
    <Box key={item.id} box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
    <Box  boxSize='120px' ml="45px" mt="5px">
<Image src={item.image} alt='Dan Abramov' />
</Box>
<Text w="120px" ml="20px" color="black" fontSize={12}>{item.title}</Text>
<Text w="120px" ml="12px" color="black" fontSize={10}>{item.offers}</Text>
<Text color="grey" ml="-25px" fontSize={12}>MRP</Text>
<Text color="black" ml="-25px" fontSize={12}>₹{item.price}</Text>
    </Box>
    ))
  }
  
</Slider>
 </div>
  </div>
  )
}

export default PlantBased
