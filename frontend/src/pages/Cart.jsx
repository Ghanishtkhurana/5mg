
import React from 'react';
import {Box,Text,Flex, Button,Image} from "@chakra-ui/react";

const data=[
  {
      id:1,
      title:"Accu-Chek Combo Pack of Active 50 Test Strip & 2 Pack of Softclix Lancet (25 Each)",
      price:2388
  },
  {
      id:2,
      title:"Immunity Care Combo of 1mg Panch Tulsi 30ml Drops and Patanjali Ayurveda Giloy Ghanvati 60 Tablet",
      price:247
  }
]
const Cart = () => {
  return (
    <Box display={{sm:"table-column",md:"flex",lg:"flex"}}>
<Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" w="600px" ml="30px" h="auto">

<Box>
{
  data.map((prod)=>(
    <Box>
    <Flex justifyContent="space-between" fontSize={12} p="10px">
    <Text w="200px">
{prod.title}</Text>
 <Text>₹{prod.price}</Text>
  </Flex>
  <Flex gap="5px" ml="85px" padding={5}>
    <Image src="https://img.1mg.com/images/delete_icon.svg" alt="delete" />
    <Text fontSize={12}>Remove</Text>
  </Flex>
  <Flex gap="10px" ml="460px" mt="-60px" padding={5}>
    <Button borderRadius={20} color="#FF6F61" bg="white" border="1px solid #FF6F61">-</Button>
<Text mt="10px">1</Text>
    <Button borderRadius={20} bg="#FF6F61" color="white">+</Button>
  </Flex>
  </Box>
  ))
  
}

</Box>
</Box>



    <Box>
<Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" w="400px" p="15px" ml="20px" h="180px">
    <Box>
      <Flex justifyContent="space-between" fontSize={12} p="10px">
        <Text>Item Total(MRP)</Text>
        <Text>₹ 1204</Text>
      </Flex>
    </Box>
    <hr></hr>
    <Box>
    <Flex justifyContent="space-between" fontSize={12} p="10px">
        <Text>Shipping Fee</Text>
        <Text>₹ 100</Text>
      </Flex>
    </Box>
    <hr></hr>
    <Box>
    <Flex justifyContent="space-between" fontSize={12} p="10px">
        <Text>To be paid</Text>
        <Text>₹ 1304</Text>
      </Flex>
    </Box>
   </Box>
   <Button w="100%" bg="#FF6F61" width="400px" ml="20px" mt="10px">CHECKOUT</Button>
    </Box>

    </Box>
  )
}

export default Cart