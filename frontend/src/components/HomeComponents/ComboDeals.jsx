import React from 'react'
import axios from "axios"
import {backendSite} from "../backendSiteLink/backendSite"
import { useEffect } from 'react'
import { Box,Image,Text } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import "./Home.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style,display: "block", background: "grey",marginRight:"25px",borderRadius:"50px",marginTop:"-55px",
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
      style={{ ...style, display: "block", background: "grey",marginLeft:"25px",borderRadius:"50px",marginTop:"-55px",
      paddingTop:"12px",width:"40px",height:"40px"}}
      onClick={onClick}
    />
  );
}



const ComboDeals = () => {
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
          dots: false
        }
      },
      {
        breakpoint: 768,
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


    const getComboDealsData=()=>{
        axios.get(`${backendSite}/comboDeals`)
          .then((res)=> {
            setData(res.data)
     })
        .catch(function (error) {
         console.log(error);
     })
    }
    useEffect(()=>{
        getComboDealsData()
    },[])
    const route= "comboDeals"
  return (
    <div>

<div style={{display:"flex",justifyContent:"space-between"}}>
    <h1 style={{margin:"15px"}}>Popular Combo Deals</h1>
    <Link to="/combodealspage">
    <button style={{height:"30px",marginTop:"30px",background:"#FF6F61",color:"white",borderRadius:"5px",
    border:"0px",margin:"15px",width:"65px"
  }}>See All</button>

  </Link>
    </div>
    <div class="firstdiv">
    <Slider {...settings}>
  {
    data.map((item)=>(
    <Link to={`/singleproduct/${item._id}`}>
    {/* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */}
    <Box key={item._id}  h="200px"
     boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
      onClick={()=>localStorage.setItem("route",route)}>
    <Box  boxSize='80px' ml="35px" mt="5px">
    <Image 
  width={{base:"60px",md:"80px",lg:"80px"}}
  height={{base:"60px",md:"80px",lg:"70px"}}
margin={{md:"auto"}}
  src={item.image} alt='Dan Abramov' />
</Box>

<Box h="35px" overflow="hidden">
<Text ml="25px" color="black" mt="5px"
width={{base:"100px",md:"120px",lg:"120px"}}
 fontSize={{base:"7px",md:"8px",lg:"10px"}}
>{item.title}</Text>
</Box>

{/* <Box h="25px"> */}
<Text color="black" fontSize={8}
ml={{base:"30px",md:"35px",lg:"35px"}}
width={{base:"70px",md:"80px",lg:"95px"}}
>{item.offers}</Text>
 {/* </Box> */}

<Text color="grey" fontSize={10}
 marginLeft={{md:"10px",lg:"-25px" }}
>MRP</Text>
<Text color="black" fontSize={12}
 marginLeft={{md:"10px",lg:"-25px" }}
>₹{item.price}</Text>

    </Box>
    </Link>
    ))
  }
</Slider>
  </div>
  </div>
  )
}

export default ComboDeals;
