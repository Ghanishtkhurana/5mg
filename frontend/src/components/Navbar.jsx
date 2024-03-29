import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { TbTestPipe } from "react-icons/tb";
import { TbFirstAidKit } from "react-icons/tb";
import { RiVirusLine } from "react-icons/ri";
import { TbPlant2 } from "react-icons/tb";
import { RiHandHeartLine } from "react-icons/ri";

import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Sec = [
  {
    id: 1,
    txt: "LAB TESTS",
    links: "/lab",
    icon: TbTestPipe,
  },
  {
    id: 2,
    txt: "CONSULT DOCTORS",
    links: "",
    icon: TbFirstAidKit,
  },
  {
    id: 3,
    txt: "COVID-19",
    links: "/covid",
    icon: RiVirusLine,
  },
  {
    id: 4,
    txt: "AYURVEDA",
    links: "/ayurved",
    icon: TbPlant2,
  },
  {
    id: 5,
    txt: "CARE PLAN",
    links: "",
    icon: RiHandHeartLine,
  },
];

const Third = [
  {
    id: 1,
    txt: "Login",
    link: "/login",
  },
  {
    id: 2,
    txt: "Sign Up",
    link: "",
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLargerThan1280] = useMediaQuery("(min-width: 1100px)");
  const { isAuth, token } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  console.log("toki", token);


 

  useEffect(() => {
    if (token) {
      // navigate("/");
      // alert("login success");
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem("Token");
    alert("logout Success");
    navigate("/login");
  };

  return (
    <Box borderBottom={"1px"} borderColor={"gray.200"} p={2}>
      {isLargerThan1280 ? (
        // LAPTOP SCREEN
        <Flex justifyContent={"space-between"}>
          {/* First half  */}
          <Flex gap={6}>
            <Box>
              <NavLink
                to={"/"}
                style={(isActive) => ({
                  color: isActive ? "green" : "blue",
                })}
              >
                <Image
                  src="https://i.postimg.cc/B696yn9C/5mglogo-removebg-preview.png"
                  width={{ base: "", md: "", lg: "120px" }}
                />
              </NavLink>
            </Box>
            {Sec.map((post, i) => (
              <Box mt={1} key={post.id}>
                <NavLink
                  to={post.links}
                  style={(isActive) => ({
                    color: isActive ? "" : "",
                  })}
                >
                  <Text
                    _hover={{ color: "rgb(255,111,97)", transition: "0.3s" }}
                    fontSize={{ base: "", md: "", lg: "17px" }}
                    fontWeight={500}
                  >
                    {post.txt}
                  </Text>
                </NavLink>
              </Box>
            ))}
          </Flex>
          {/* Second half  */}
          <Flex>
            {/* {Third.map((post, i) => (
              <Button
                key={post.id}
                m={1}
                size="sm"
                _hover={{}}
                bgColor={"rgb(255,111,97)"}
              >
                <Flex>
                  <Text color={"white"} fontSize={"13px"}>
                    {post.txt}
                  </Text>
                </Flex>
              </Button>
            ))} */}
            <Button m={1} size="sm" _hover={{}} bgColor={"rgb(255,111,97)"}>
              <Flex>
                <Text color={"white"} fontSize={"13px"}>
                  {token && <Text onClick={() => logout()}>Logout</Text>}
                  {token == false && (
                    <Text onClick={() => navigate("/login")}>login</Text>
                  )}
                </Text>
              </Flex>
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              m={1}
              size="sm"
              _hover={{}}
              bgColor={"rgb(255,111,97)"}
            >
              <Flex>
                <Text color={"white"} fontSize={"13px"}>
                  Sign Up
                </Text>
              </Flex>
            </Button>

            <Button m={1} size="sm" _hover={{}} bgColor={"rgb(255,111,97)"}>
              <Flex>
                <Link to="/cart">
                  <Icon as={MdAddShoppingCart} w={5} color={"white"} h={5} />
                </Link>
                <Text color={"white"} fontSize={"13px"}>
                  {/* count  */}
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      ) : (
        // MOBILE SCREEN
        <Box borderBottom={"1px"} borderColor={"gray.400"}>
          <Flex justifyContent={"space-between"}>
            <Flex gap={2}>
              <Box m={1} ref={btnRef} colorScheme="teal" onClick={onOpen}>
                <Icon as={BsList} w={7} h={7} />
              </Box>
              <Box m={1}>
                <Image
                  src="https://i.postimg.cc/B696yn9C/5mglogo-removebg-preview.png"
                  width={"100px"}
                  height={"100px"}
                />
              </Box>
            </Flex>
            <Box>
              <Button m={1} size="sm" _hover={{}} bgColor={"rgb(255,111,97)"}>
                <Flex>
                  <Link to="/cart">
                    <Icon as={MdAddShoppingCart} w={5} color={"white"} h={5} />
                  </Link>
                  <Text color={"white"} fontSize={"13px"}>
                    {/* count  */}
                  </Text>
                </Flex>
              </Button>
              {/* Drawer  */}
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  {/* User  */}
                  <DrawerHeader>
                    <Flex
                      gap={2}
                      borderBottom={"1px"}
                      borderColor={"gray.400"}
                      pb={5}
                    >
                      <Box>
                        <Link to={"/"}>
                          <Image
                            borderRadius={100}
                            width={"70px"}
                            src="https://support.discord.com/hc/user_images/l12c7vKVRCd-XLIdDkLUDg.png"
                          />
                        </Link>
                      </Box>
                      <Flex m={2} flexDirection={"column"}>
                        <Box>
                          <Text>Hey 👋</Text>
                        </Box>
                        <Box>
                          <Text>UserName</Text>
                        </Box>
                      </Flex>
                    </Flex>
                  </DrawerHeader>

                  <DrawerBody>
                    {/* Pages Link  */}
                    <Flex
                      flexDirection={"column"}
                      gap={8}
                      borderBottom={"2px"}
                      pb={10}
                      borderColor={"gray.300"}
                    >
                      {Sec.map((post) => (
                        <Link to={post.links} key={post.id}>
                          <Flex flexDirection={"row"} gap={6}>
                            <Icon as={post.icon} w={6} h={6} />
                            <Text fontSize={"18px"}>{post.txt}</Text>
                          </Flex>
                        </Link>
                      ))}
                    </Flex>
                    <Flex mt={5} alignItems={"end"}>
                      {Third.map((post, i) => (
                        <Button
                          key={post.id}
                          m={1}
                          size="md"
                          _hover={{}}
                          bgColor={"rgb(255,111,97)"}
                        >
                          <Text color={"white"} fontSize={"13px"}>
                            {post.txt}
                          </Text>
                        </Button>
                      ))}
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
