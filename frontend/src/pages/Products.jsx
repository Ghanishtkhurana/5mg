import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Icon,
  Center,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { FiSliders } from "react-icons/fi";

const Products = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1080px)");
  const [price, setPrice] = useState("");
  const [cat, setCat] = useState("");
  const [data1, setData1] = useState("");
  useEffect(() => {}, []);

  useEffect(() => {
    if (cat.length == 0) {
      axios
        .get("http://localhost:4001/cereal")
        .then((res) => setData1(res.data))
        .catch((err) => console.log(err));
    } else if (cat.length > 0 && price.length > 0) {
      axios
        .get(`http://localhost:4001/${cat}/${price}`)
        .then((res) => {
          setData1(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`http://localhost:4001/${cat}`)
        .then((res) => setData1(res.data))
        .catch((err) => console.log(err));
    }
  }, [cat.length, price.length]);

  const Handlecategory = (value) => {
    setCat(value);
  };
  console.log(data1);

  const handlesort = (e) => {
    setPrice(e.target.value);
  };

  return (
    <Box>
      {isLargerThan1280 ? (
        //   Laptop
        <Box bgColor={"rgb(246,246,246)"}>
          <Flex gap={3}>
            {/* Filter  */}
            {/* One  */}
            <Box bgColor={"white"} h={"500px"} w={"300px"} >
              <Box borderBottom={"1px"} borderColor={"gray.300"}>
                <Text fontSize={"19px"} textAlign={"left"} pt={2} pl={3} pb={2} fontWeight={500}>
                  FILTER
                </Text>
              </Box>
              <Flex mt={2} alignItems={"flex-start"} flexDirection={"column"} pl={4} pr={4}>
                <Box>
                  <Text fontSize={"16px"} fontWeight={500}>
                    CATEGORIES
                  </Text>
                </Box>
                <Box _hover={{color:"rgb(255,111,97)",transition:".3s",cursor:"pointer"}} onClick={() => Handlecategory("cereal")}>
                  <Text>cereals</Text>
                </Box>
                <Box _hover={{color:"rgb(255,111,97)",transition:".3s",cursor:"pointer"}} onClick={() => Handlecategory("plant")}>
                  <Text>Plant Based</Text>
                </Box>
                <Box _hover={{color:"rgb(255,111,97)",transition:".3s",cursor:"pointer"}} onClick={() => Handlecategory("comboDeals")}>
                  <Text>Combodeals</Text>
                </Box>
                <Box _hover={{color:"rgb(255,111,97)",transition:".3s",cursor:"pointer"}} onClick={() => Handlecategory("trending")}>
                  <Text>Trendings</Text>
                </Box>
              </Flex>
              <Box>
                {/* Second  */}
                <Box h={"500px"} w={"230px"}>
                  <Text fontSize={"19px"} textAlign={"left"} pt={2} pl={3} fontWeight={500} fontSize={"20px"} fontWeight={500}>
                    Price
                  </Text>

                  <Flex alignItems={"flex-start"} flexDirection={"column"} pl={4} pr={4}>
                    <Text>Sort By Price </Text>
                    <Box>
                      <input
                        type="checkbox"
                        value="high"
                        onChange={handlesort}
                      />
                      <label>Price Greater then 550</label>
                    </Box>
                    <Box>
                      <input
                        type="checkbox"
                        value="low"
                        onChange={handlesort}
                      />
                      <label>Price Less then 550 </label>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
            {/* Products  */}
            <Box m={2}>
              <Text
                p={2}
                textAlign={"left"}
                fontWeight={500}
                fontSize={{ base: "", md: "", lg: "21px" }}
              >
                PRODUCTS
              </Text>
              <SimpleGrid columns={[3, 4]} spacing={6}>
                {data1 &&
                  data1.map((post, i) => (
                    <Box
                      bgColor={"white"}
                      key={i}
                      boxShadow={"md"}
                      borderColor={"gray.400"}
                      p={2}
                      borderRadius={10}
                    >
                      <Center>
                        <Image m={5} src={post.image} w={"100px"} h={"150px"} />
                      </Center>
                      <Box>
                        <Text
                          m={1}
                          textAlign={"left"}
                          fontSize={"14px"}
                          fontWeight={500}
                        >
                          {post.title}
                        </Text>
                        <Flex mt={2} gap={4}>
                          <Flex
                            gap={1}
                            width={"45px"}
                            bg={"green.400"}
                            pr={1}
                            pl={1}
                          >
                            <Text
                              mt={"2px"}
                              color={"white"}
                              fontSize={"13px"}
                              fontWeight={500}
                            >
                              {post.rating}
                            </Text>
                            <Icon
                              as={BsStarFill}
                              w={3}
                              mt={"5px"}
                              h={3}
                              color={"white"}
                            />
                          </Flex>
                          <Box>
                            <Text fontSize={"14px"} color={"gray.400"}>
                              {Math.floor(Math.random() * 1000)} rating
                            </Text>
                          </Box>
                        </Flex>
                        <Flex mt={2} justifyContent={"space-between"}>
                          <Box mt={2}>
                            <Text fontSize={"17px"} fontWeight={400}>
                              ₹ {post.price}
                            </Text>
                          </Box>
                          <Button bg={"none"}>
                            <Text color={"rgb(255,111,97)"} fontWeight={500}>
                              ADD
                            </Text>
                          </Button>
                        </Flex>
                      </Box>
                    </Box>
                  ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      ) : (
        //   Mobile
        <Box>
          <Box>
            {/* Filter  */}
            <Box boxShadow={"md"}>
              <Center gap={3} p={2}>
                <Icon as={FiSliders} w={5} h={5} />
                <Text fontSize={"18px"}>Filters</Text>
              </Center>
            </Box>

            {/* Product  */}
            <Box>
              <Text fontSize={"16px"} textAlign={"left"} p={3} fontWeight={500}>
                {" "}
                BREAKFAST CEREALS
              </Text>
              {/* {data1.map((post) => (
                <Box
                  borderBottom={"2px"}
                  borderColor={"gray.200"}
                  pt={5}
                  pr={2}
                  pl={2}
                  pb={5}
                >
                  <Flex gap={5} ml={3} mr={3}>
                    <Box>
                      <Image width={"80px"} src={post.image} />
                    </Box>
                    <Box>
                      <Text
                        m={1}
                        textAlign={"left"}
                        fontSize={"14px"}
                        fontWeight={500}
                      >
                        {post.title}
                      </Text>
                      <Flex mt={2} gap={4}>
                        <Flex
                          gap={1}
                          width={"45px"}
                          bg={"green.400"}
                          pr={1}
                          pl={1}
                        >
                          <Text
                            mt={"2px"}
                            color={"white"}
                            fontSize={"13px"}
                            fontWeight={500}
                          >
                            {post.rating}
                          </Text>
                          <Icon
                            as={BsStarFill}
                            w={3}
                            mt={"5px"}
                            h={3}
                            color={"white"}
                          />
                        </Flex>
                        <Box>
                          <Text fontSize={"14px"} color={"gray.400"}>
                            {Math.floor(Math.random() * 1000)} rating
                          </Text>
                        </Box>
                      </Flex>
                      <Flex
                        gap={2}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        mt={2}
                        justifyContent={"space-between"}
                      >
                        <Box>
                          <Text fontSize={"17px"} fontWeight={400}>
                            ₹ {post.price}
                          </Text>
                        </Box>
                        <Button
                          size={"sm"}
                          color={"rgb(255,111,97)"}
                          bg={"none"}
                          border={"1px"}
                        >
                          <Text color={"rgb(255,111,97)"} fontWeight={500}>
                            Add to cart
                          </Text>
                        </Button>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              ))} */}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Products;
