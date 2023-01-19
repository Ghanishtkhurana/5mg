import React from 'react'
import axios from "axios"
import {backendSite} from "../backendSiteLink/backendSite"
import { useEffect } from 'react'
import { Box,Image,Text } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style,display: "block", background: "grey",marginRight:"25px",borderRadius:"50px",
      paddingTop:"12px",width:"40px",height:"30px"}}
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
      paddingTop:"12px",width:"40px",height:"30px"}}
      onClick={onClick}
    />
  );
}


const Trending = () => {
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

    const tredingDealsData=()=>{
        axios.get(`${backendSite}/trending`)
          .then((res)=> {
            setData(res.data)
        console.log("trendingDealsData:",res.data);
     })
        .catch(function (error) {
         console.log(error);
     })
    }
    useEffect(()=>{
        tredingDealsData()
    },[])
  return (
    <div>
     <div style={{display:"flex",justifyContent:"space-between"}}>
    <h1>Trending now</h1>
    <Link to="/trendingproductpage">
    <button style={{height:"30px",marginTop:"30px",background:"#FF6F61",color:"white",borderRadius:"5px",
    border:"0px"
  }}>See All</button>
   </Link>
    </div>
    <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <Slider {...settings}>
    {
      data.map((item)=>(
      <Box key={item._id} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <Box  boxSize='120px' ml="35px" mt="5px">
  <Image src={item.image} alt='Dan Abramov' />
</Box>
<Text w="120px" ml="12px" color="black">{item.title}</Text>
<Text color="grey" ml="-25px">MRP</Text>
<Text color="black" ml="-25px">₹{item.price}</Text>

      </Box>
      ))
    }
</Slider>
   </div>
    </div>
  )
}

export default Trending
