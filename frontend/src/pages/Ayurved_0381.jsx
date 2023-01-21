
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Carausel } from '../components/Carausel'
import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {backendSite} from "../components/backendSiteLink/backendSite"

export const Ayurved = () => {
const [data,setData] = useState("")
const navigate = useNavigate()

const GetID =(id)=>{
console.log(id)
navigate(`/ayurveda/${id}`)
}

const Getdata =()=>{

axios.get(`${backendSite}/ayurveda`)
.then((res)=>{setData(res.data)})
.catch((err)=>console.log(err))

}

useEffect(()=>{
Getdata()
},[])

  return (
    
    <Box style={{backgroundColor:"#f7f7f7"}}  >


<Text  fontWeight={500} fontSize={{base : "15px",md:"20px",lg:"30px"}} >Featured Herbs</Text>
<Carausel  url= "herbs"  typeC={"herbs"}  />
<Text  fontWeight={500} fontSize={{base : "15px",md:"20px",lg:"30px"}} >Skin Care</Text>
<Carausel  url= "skin" typeC={"skin"} />
<Text  fontWeight={500} fontSize={{base : "15px",md:"20px",lg:"30px"}} >Digestive Care</Text>
<Carausel url="digest"  typeC={"digest"} />
<Text  fontWeight={500} fontSize={{base : "15px",md:"20px",lg:"30px"}} >Hair Care</Text>
<Carausel  url="hairs"  typeC={"hairs"} />

<Text  fontWeight={500} fontSize={{base : "13px",md:"20px",lg:"50px"}} >AYURVEDIC OSUDI</Text>

<SimpleGrid columns={[1, 2, 3]} spacing='40px'>

  {
    data  && data.map((post)=>(
        <Box  backgroundColor={"white"} h={"270px"}  display ={"flex"} m = {"auto"} gap="10px"  >
            <Box>
            <Image src={post.herbImage} w={{base:"100px" ,md:"150px" , lg:"200px"}}  /> 
            
            <Text   fontWeight={500}  textAlign={ 'center' }  fontSize ={{base : "15px"}}  >{post.name}</Text> 
            
            </Box>
<Box  w={{base:"70%" ,md:"30%", lg:"50%"}} textAlign={ 'center' } >
    <Text>{post.smalldes}
    <Button mt={"25px"} ml={"5px"} border="1px solid transparent" bg="white" color="tomato"   onClick={()=>GetID(post._id)}  >Read More</Button>
    </Text></Box>

            </Box>
          
    ))
  }

</SimpleGrid>

    </Box>
  )
}


