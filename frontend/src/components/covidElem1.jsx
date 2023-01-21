import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export const CovidElem = ({head1,head2,btn,imgurl}) => {
  return (
   <Box mb="50px" width="90%" m="auto" mt="50px"  height={{base:"1100px", md:"400px", lg:"300px"}}  bg='#fdf0df'>

    <SimpleGrid  columns={[1,1, 2]} spacing='40px'  >

  <Box   height={{base:"500px", md:"400px", lg:"300px"}}   >
<Text fontWeight={"bold"} fontSize="3xl"  >{head1}</Text>

<Text fontSize={"30px"}  >{head2}</Text>
  <Button  bg="tomato"  w={{base:"100px",md:"100px" ,lg:"150" }}  fontSize={"1xl"} color="white" w={"400px"} mt={{base:"80px",md:"100px",lg:"80px"}}  >{btn}</Button>
  </Box>

  <Box  height={{base:"400px", md:"300px", lg:"300px"}}   >

<Image w={{base:"100%", md:"30%",lg:"70%"}}  h={{base:"300px", md:"400px",lg:"250px"}} ml={{base:"00px",md:"00px" ,lg:"170px"}}  src={imgurl} />
  </Box>


  
  
</SimpleGrid>
   </Box>
  )
}
