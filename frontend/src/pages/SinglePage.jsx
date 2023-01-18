import { Box, Flex, Image, Text,Icon } from "@chakra-ui/react";
import React from "react";
import {BsStarFill} from 'react-icons/bs'
import {FaDotCircle} from 'react-icons/fa'


const SinglePage = () => {
  return (
    <Box>
      <Flex>
        {/* Product Image  */}
        <Box>
          <Image src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/wf4epamdbrwhyus9oz6f.jpg" />
        </Box>
        {/* Product description  */}
        <Box>
            {/* Heading  */}
            <Text m={2} fontSize={{base :"",md:"",lg:"21px"}} fontWeight={500}>Saffola Masala Oats Classic Masala</Text>
            <Flex m={2} gap={4}>
                <Flex gap={2} bg={"green.400"} pr={1} pl={1}>
                    <Text color={"white"} fontSize={"13px"} fontWeight={500}>4.4</Text>
                    <Icon as={BsStarFill} w={3} mt={"3px"} h={3} color={"white"} />
                </Flex>
                <Box>
                    <Text color={"rgb(255,111,97)"} fontWeight={500} fontSize={{base:"13px",md:"15px",lg:"15px" }} >352 Ratings & 45 Reviews</Text>
                </Box>
            </Flex>
            <Box>
                <Text fontSize={{base :"",md:"",lg:"15px"}}>Product highlights</Text>
                <Flex gap={2}pr={1} pl={1}>
                    <Text color={"white"} fontSize={"13px"} fontWeight={500}>4.4</Text>
                    <Icon as={FaDotCircle} w={3} mt={"3px"} h={3} color={"white"} />
                </Flex>
            </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SinglePage;
