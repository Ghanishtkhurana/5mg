import React from 'react'
import axios from "axios"
import {backendSite} from "../backendSiteLink/backendSite"
import { useEffect } from 'react'
import { Box,Image,Text,Button } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style,display: "block", background: "grey",marginRight:"25px",borderRadius:"50px",marginTop:"-35px",
      paddingTop:"12px",width:"40px",height:"40px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey",marginLeft:"25px",borderRadius:"50px",marginTop:"-35px",
      paddingTop:"12px",width:"40px",height:"40px"}}
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
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      }
    ]
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
    <h1 style={{margin:"25px"}}>Plant based supplements</h1>
    <Link to="/plantbasedproductspage">
    <Button style={{height:"30px",marginTop:"30px",background:"#FF6F61",color:"white",borderRadius:"5px",
    border:"0px",margin:"15px",width:"60px"
  }}>See All</Button>
  </Link>
    </div>
    <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",height:"280px"}}>
    <Slider {...settings}>
  {
    data.map((item)=>(
    <Box key={item._id} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" h="280px">
    <Box  boxSize='120px' ml="35px" mt="5px">
<Image 
width={{base:"60px",md:"80px",lg:"80px"}}
height={{base:"80px",md:"80px",lg:"120px"}}
margin={{md:"auto"}}
src={item.image} alt='Dan Abramov' />
</Box>

<Text ml="12px" color="black" mt="5px"
width={{base:"100px",md:"120px",lg:"120px"}}
 fontSize={{base:"10px",md:"10px",lg:"12px"}}
>{item.title}</Text>

<Text w="120px" ml="12px" color="black" fontSize={10}>{item.offers}</Text>
<Text color="grey" fontSize={10}
 marginLeft={{md:"10px",lg:"-25px" }}
>MRP</Text>
<Text color="black" ml="-25px" fontSize={12}
 marginLeft={{md:"10px",lg:"-25px" }}
>₹{item.price}</Text>
    </Box>
    ))
  }
  
</Slider>
 </div>
  </div>
  )
}

export default PlantBased;