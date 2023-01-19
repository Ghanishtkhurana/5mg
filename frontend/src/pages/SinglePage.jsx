import {
  Box,
  Flex,
  Image,
  Text,
  Icon,
  Button,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";
import { TbArrowWaveRightUp } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { backendSite } from "../components/backendSiteLink/backendSite";

const SinglePage = (prop) => {
  console.log(prop)

  const [data,setData]=useState({})
  const {id}=useParams()
  const getData=()=>{
    axios.get(`${backendSite}/comboDeals/${id}`)
    .then((res)=> {
      console.log(res.data)
      setData(res.data)
  console.log(res.data);
})
  .catch(function (error) {
   console.log(error);
})
  }
  useEffect(()=>{
    getData()
  },[])


  return (
    <Box>
      <Flex
        justifyContent={"space-evenly"}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
      >
        {/* Product Image  */}
        <Center>
          <Image src={data.image} />
        </Center>
        {/* Product description  */}
        <Box m={10}>
          {/* Heading  */}
          <Text
            mt={2}
            mb={2}
            fontSize={{ base: "19px", md: "", lg: "21px" }}
            fontWeight={500}
          >
            {data.title}
          </Text>
          <Flex mt={3} gap={4}>
            <Flex gap={2} bg={"green.400"} pr={1} pl={1}>
              <Text color={"white"} fontSize={"13px"} fontWeight={500}>
                {data.rating}
              </Text>
              <Icon as={BsStarFill} w={3} mt={"3px"} h={3} color={"white"} />
            </Flex>
            <Box>
              <Text
                color={"rgb(255,111,97)"}
                fontWeight={500}
                fontSize={{ base: "15px", md: "15px", lg: "15px" }}
              >
                352 Ratings & 45 Reviews
              </Text>
            </Box>
          </Flex>
          <Flex mt={4} mb={2} gap={3}>
            <Image
              src="https://onemg.gumlet.io/marketing/qubet60eokwth4ki5btj.png"
              width={"35px"}
            />
            <Text fontWeight={500} mt={1} color={"rgb(255,111,97)"}>
            </Text>
          </Flex>
          <Box mt={5}>
            <Text
              fontSize={{ base: "17px", md: "17px", lg: "17px" }}
              textAlign={"left"}
              m={2}
              fontWeight={500}
            >
              Product highlights
            </Text>
            <Flex gap={2} pr={1} pl={1}>
              <Icon as={FaDotCircle} w={3} mt={"3px"} h={3} color={"black"} />
              <Text
                color={"black"}
                fontSize={{ base: "15px", md: "16px", lg: "17px" }}
                fontWeight={500}
              >
                It has an abundance of protein and fibre
              </Text>
            </Flex>
            <Flex gap={2} pr={1} pl={1}>
              <Icon as={FaDotCircle} w={3} mt={"3px"} h={3} color={"black"} />
              <Text color={"black"} fontSize={{ base: "15px", md: "16px", lg: "17px" }} fontWeight={500}>
                It is a healthier alternative for breakfast
              </Text>
            </Flex>
            <Flex gap={2} pr={1} pl={1}>
              <Icon as={FaDotCircle} w={3} mt={"3px"} h={3} color={"black"} />
              <Text color={"black"} fontSize={{ base: "15px", md: "16px", lg: "17px" }} fontWeight={500}>
                It helps suppress appetite
              </Text>
            </Flex>
          </Box>
        </Box>
        {/* Add To Cart  */}
        <Flex flexDirection={"column"}>
          <Box mt={{base:2,md:10,lg:10}} mr={2} ml={2} boxShadow={"md"} borderRadius={50}>
            <Flex
              gap={3}
              borderTopRadius={50}
              bgColor={"green.100"}
              pr={10}
              pl={10}
              pt={2}
              pb={2}
            >
              <Icon w={5} h={5} as={TbArrowWaveRightUp} />
              <Text fontWeight={400} fontSize={"13px"}>
                961 people bought this recently
              </Text>
            </Flex>
            <Box>
              <Flex mt={5} mb={2} ml={5} gap={5}>
                <Icon
                  as={FaDotCircle}
                  w={6}
                  mt={"3px"}
                  h={6}
                  color={"rgb(255,111,97)"}
                />
                <Text color={"black"} fontSize={"24px"} fontWeight={500}>
                  ₹{" "}{data.price}
                </Text>
                <Box
                  bgColor={"green.100"}
                  pt={1}
                  pb={1}
                  borderRadius={50}
                  pr={4}
                  pl={4}
                >
                  <Text>12% off</Text>
                </Box>
              </Flex>
            </Box>
            <Button _hover={{}} m={2} bgColor={"rgb(255,111,97)"}>
              <Text
                color={"white"}
                fontSize={{ base: "", md: "", lg: "15px" }}
                pl={7}
                pr={7}
              >
                ADD TO CART
              </Text>
            </Button>
          </Box>
          {/* second Box  */}
          <Box boxShadow={"md"} borderRadius={50} pt={5} pb={5} m={2}>
            <Box
              borderTopRadius={50}
              bgColor={"green.100"}
              pr={10}
              pl={10}
              pt={2}
              pb={2}
            >
              <Text
                fontWeight={500}
                fontSize={{ base: "14px", md: "15px", lg: "16px" }}
              >
                Earliest delivery by 10pm
              </Text>
            </Box>
            <Text fontWeight={500} mt={1} mb={1} color={"green.400"}>
              Tomorrow
            </Text>
            <Text>Delivering to: 110020, New Delhi</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SinglePage;
