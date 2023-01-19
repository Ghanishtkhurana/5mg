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
      padding:"6px",width:"30px",height:"30px"}}
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
      padding:"6px",width:"30px",height:"30px"}}
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
    <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
    <Slider {...settings}>
  {
    data.map((item)=>(
    <Box key={item.id} box-shadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
    <Text w="120px" ml="12px" color="black">{item.title}</Text>
<Text w="120px" ml="12px" color="black" fontSize={10}>{item.no_of_tests}</Text>
    <Box  boxSize='120px' ml="35px" mt="5px">
    <Flex>
    <Image src={item.image} alt='Dan Abramov' />
{/* <Text>rate</Text>
<Text>ISO</Text> */}
    </Flex>
</Box>
<Text color="grey" ml="-25px">MRP</Text>
<Text color="black" ml="-25px">₹{item.price}</Text>

    </Box>
    ))
  }
</Slider>
  </div>
  )
}

export default FullbodyCheck
