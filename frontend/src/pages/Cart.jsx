import React from "react";
import { Box, Text, Flex, Button, Image, Center } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let token = localStorage.getItem("Token");

const getCart = async () => {
  const res = await axios.get("http://localhost:4001/cart", {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = res.data;
  return data;
};

const itemDelete = async (id) => {
  const res = await axios.delete(`http://localhost:4001/cart/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = res.data;
  getCart();
  return data;
};

const checkout = async (id) => {
  const res = await axios.delete(`http://localhost:4001/cart/checkout/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = res.data;
  getCart();
  return data;
};

const Cart = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getCart().then((res) => setData(res));
  }, [state]);

  let total = data.reduce((acc, el) => acc + el.price, 0);

  const handleTheDelete = (id) => {
    console.log(id);
    itemDelete(id);
    getCart().then((res) => setData(res));
    alert("Item is removed from your cart");
    getCart().then((res) => setData(res));
  };
  console.log("total", total);
  console.log(data);

  const handleTheCheckout = (id) => {
    console.log("checkout user id=>", id);
    checkout(id);
    getCart().then((res) => setData(res));
    alert("Your order is placed");
    navigate("/");
  };

  return (
    <Flex justifyContent={"center"}>
      <Box
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        w="600px"
        ml="30px"
        h="auto"
      >
        <Box>
          <Center>
            
              {
                data.length == 0 && <Text fontWeight={500} mt={"70px"} fontSize={"20px"}>Your cart is empty</Text>
              }
           
          </Center>
          {data.map((prod) => (
            <Box borderBottom={"1px"} borderColor={"gray.300"}>
              <Flex justifyContent={"space-between"} pr={"20px"}>
                <Box p={2} width={"200px"}>
                  <Center>
                    <Image src={prod.image} width={"60px"} h={"100px"} />
                  </Center>
                  <Box mt={2}>
                    <Text fontSize={"13px"} fontWeight={500}>
                      {prod.title}
                    </Text>
                  </Box>
                </Box>

                <Box p={2}>
                  <Flex gap={3} justifyContent={"center"} fontWeight={500}>
                    <Text>Price</Text>
                    <Text>{prod.price}</Text>
                  </Flex>
                  <Flex gap={5} mt={3}>
                    <Button
                      color={"white"}
                      bgColor={"rgb(255,111,97)"}
                      _hover={{}}
                      borderRadius={100}
                      size="sm"
                    >
                      -
                    </Button>
                    <Text mt={2} fontWeight={500}>
                      1
                    </Text>
                    <Button
                      color={"white"}
                      bgColor={"rgb(255,111,97)"}
                      _hover={{}}
                      borderRadius={100}
                      size="sm"
                    >
                      +
                    </Button>
                  </Flex>
                  <Button
                    mt={5}
                    color={"white"}
                    bgColor={"rgb(255,111,97)"}
                    _hover={{}}
                    borderRadius={10}
                    size="sm"
                    onClick={() => handleTheDelete(data[0]._id)}
                  >
                    Remove
                  </Button>
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>

      <Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          w="400px"
          p="15px"
          ml="20px"
          h="180px"
        >
          <Box>
            <Flex justifyContent="space-between" fontSize={12} p="10px">
              <Text>Item Total(MRP)</Text>
              <Text>₹ {total}</Text>
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
              <Text>₹ {total + 100}</Text>
            </Flex>
          </Box>
        </Box>
        <Button
          onClick={() => handleTheCheckout(data[0].userID)}
          w="100%"
          bg="#FF6F61"
          width="400px"
          ml="20px"
          mt="10px"
          _hover={{}}
        >
          <Text fontWeight={500} color={"white"}>PAY NOW</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default Cart;
