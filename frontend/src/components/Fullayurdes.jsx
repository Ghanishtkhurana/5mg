import { Avatar, Box, Button, Image, Select, SimpleGrid, Text, Wrap, WrapItem } from '@chakra-ui/react'
import axios from 'axios'
import doctor from "../Photo/doctor.png"
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { backendSite } from './backendSiteLink/backendSite'

export const Fullayurdes = () => {
    const {id} = useParams()
    
const [data,setData] = useState("")

const Singleproduct=()=>{
axios.get(`${backendSite}/ayurveda/${id}`)
.then((res)=>setData(res.data))
.catch((err)=>console.log(err))
}

useEffect(()=>{
Singleproduct()
},[])

console.log(data)
  return (
    <Box  bg="#f6f6f6" >

<SimpleGrid columns={[1, 2, 3]} spacing='10px' border={"1px solid black"} h={[1800,1600,1100]} >

  <Box border={"1px solid transparent"} bg="white"  height={{base:"500px" , md:"650px" , lg:"500px"}} width={{base:"90%" , md:"150px" , lg:"250px"}} >
  <Box  height='50%'>
    <Text fontWeight={"bold"} >Introduction</Text>
  <Select placeholder='Select option'>
  <option value='option1'>Benefits</option>
  <option value='option2'>Precautions</option>
  <option value='option3'>Recommended dosage</option>
  <option>How to use</option>
  <option>FAQs</option>
  <option>References</option>
</Select>

  </Box>
  <Box  height='50%'>
    <Text fontWeight={"bold"} >Author Details</Text>
  <Wrap>
  <WrapItem textAlign={"left"}>
    
    <Avatar name='Dan Abrahmov' src='https://onemg.gumlet.io/a_ignore,w_48,h_48,q_auto,f_auto/qozhwqtacigecpsjkaqd.jpg' mt="5px" />
    
   
  </WrapItem>
  <Box>
  <Text  >Scientific View By</Text>
   <Text fontWeight={"bold"} color="tomato"  >Diksha Gupta</Text>
   <Text  >B.Pharma</Text>
  </Box>
</Wrap>

<hr/>

  <Wrap>
  <WrapItem textAlign={"left"}>
    
    <Avatar name='Dan Abrahmov' src='https://onemg.gumlet.io/a_ignore,w_48,h_48,q_auto,f_auto/piol6lirr0oesokvsqf3.jpg' mt="5px" />
    
   
  </WrapItem>
  <Box>
  <Text  >Ayurvedic View By</Text>
   <Text fontWeight={"bold"} color="tomato"  >Diksha Gupta</Text>
   <Text  >BAMS</Text>
  </Box>
</Wrap>
<hr/>

<Wrap>
  <WrapItem textAlign={"left"}>
    
    <Avatar name='Dan Abrahmov' src='https://onemg.gumlet.io/a_ignore,w_48,h_48,q_auto,f_auto/jhzbuursz9uchawzilzj.jpg' mt="5px" />
    
   
  </WrapItem>
  <Box>
  <Text  >Reviewed By</Text>
   <Text fontWeight={"bold"} color="tomato"  >Dr. Ashish Ranjan</Text>
   <Text  >MD (Pharmacology), MBBS</Text>
  </Box>
</Wrap>
<hr/>
  </Box>
  </Box>
{/* herbs show div */}
  <Box   bg="white"   height={{base:"200px" , md:"700px" , lg:"900px"}} width={{base:"100%" , md:"200px" , lg:"600px"}}>
  
 
 <Image src={data.herbImage} />
 <Text textAlign={'left'} fontWeight="bold" fontSize={["1xl", "2xl","4xl"]} > {data.name}</Text>
 <Box>
    <Text textAlign={'left'}   >{data.largedes}</Text>
 </Box>
  </Box>
  
 {/* for doctor */}
 <Box bg="white" marginLeft={{base:"00px" , md:"00px" , lg:"170px"}}    mt={{base:"800px" ,md:"-100px" ,lg:"00px"}}  border={"1px solid transparent"} height={{base:"200px" , md:"250px" , lg:"250px"}} width={{base:"100%" , md:"200px" , lg:"250px"}} >

<Box  m="auto" mt={{base:"00px" , md:"00px" , lg:"30%"}} border={"1px solid transparent"} w="50%" >
<img  src={doctor}   />

</Box>
<Button border={"1px solid red"} backgroundColor="white" color="red" mt="10px" >Consult Doctor Online</Button>
 </Box>
</SimpleGrid>

    </Box>
  )
}
