import React from 'react'
import axios from "axios"
import {backendSite} from "../backendSiteLink/backendSite"
import { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box,Image,Text,Flex } from '@chakra-ui/react'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style,display: "block", background: "grey",marginRight:"25px",borderRadius:"50px",
      paddingTop:"12px",width:"40px",height:"40px",marginTop:"20px"}}
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
      paddingTop:"12px",width:"40px",height:"40px"}}
      onClick={onClick}
    />
  );
}

const FullbodyCheck = () => {
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


    const getFullBodyData=()=>{
        axios.get(`${backendSite}/fullBodyCheck`)
          .then((res)=> {
            setData(res.data)
        console.log("fullbodydata:",res.data);
     })
        .catch(function (error) {
         console.log(error);
     })
    }
    useEffect(()=>{
        getFullBodyData()
    },[])

  return (
    <div>
     <div style={{display:"flex",justifyContent:"space-between"}}>
    <h1 style={{margin:"15px"}}>Full body health checkups</h1>
    <button style={{height:"30px",marginTop:"30px",background:"#FF6F61",color:"white",borderRadius:"5px",
    border:"0px",margin:"15px"
    }}>See All</button>
    </div>
    <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
    <Slider {...settings}>
  {
    data.map((item)=>(
    <Box key={item.id}>
    <Text w="120px" ml="12px" color="black" fontSize={12}>{item.title}</Text>
<Text w="120px" ml="12px" color="black" fontSize={10}>{item.no_of_tests}</Text>
    <Box  boxSize='120px' ml="35px" mt="5px">
    <Flex ml="-5px">
    <Image w="60px" src={item.image} alt='Dan Abramov' />
     <p style={{color:"white",background:"green",fontSize:"10px",padding:"2px",height:"20px",marginTop:"15px"}}>{item.rating}✰</p> 
<Text fontSize={12} ml="2px" mt="15px">ISO</Text>
    </Flex>
</Box>
<Text color="grey" ml="-25px" mt="-55px" fontSize={12}>MRP</Text>
<Text color="black" ml="-25px" fontSize={12} mb={10}>₹{item.price}</Text>

    </Box>
    ))
  }
</Slider>
  </div>
  </div>
  )
}

export default FullbodyCheck
