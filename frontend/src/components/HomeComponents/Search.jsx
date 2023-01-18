import React from 'react';
import { Input,Flex,Box, Button } from '@chakra-ui/react'

const Search = () => {
   
  
    return (
        <Box p="20px">
        <Flex color='white' alignItems="center" justifyContent="space-between">

        <Input p="20px"
          pr='4.5rem'
          type="text"
          placeholder='Search Products'
        />
  <Box>
    <Button bg='tomato'>Quick order</Button>
  </Box>
</Flex>
        </Box>
      
    )
}

export default Search
