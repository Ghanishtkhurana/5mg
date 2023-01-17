import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import LabImageS from "../components/LabImageS";
import Navbar from "../components/Navbar";

const One = [
  {
    img: "https://onemg.gumlet.io/Safe_38x38_labs_oe5ieq.png?format=auto",
    txt: "100% Safe & Hygienic",
  },
  {
    img: "https://onemg.gumlet.io/new_color_images/Lab_delivery_2x.png?format=auto",
    txt: "Home Sample Pick Up",
  },
  {
    img: "https://onemg.gumlet.io/new_color_images/Lab_online_report_2x.png?format=auto",
    txt: "View Reports Online",
  },
  {
    img: "https://onemg.gumlet.io/new_color_images/Lab_doctor_2x.png?format=auto",
    txt: "Free Doctor Consultation",
  },
  {
    img: "https://onemg.gumlet.io/new_color_images/Lab_offer_2x.png?format=auto",
    txt: "Best Prices Guaranteed",
  },
];

const Lab = () => {
  return (
    <Center>
      <Box>
        <Flex gap={10} mt={10} mb={10}>
          <Box>
            <LabImageS />
          </Box>
          <Box>
            <Box>
              <Text fontSize={"20px"} fontWeight={"500"}>
                Lab Test From The Comfort Of Your Home
              </Text>
              <Text fontSize={"16px"} fontWeight={"500"}>
                {" "}
                50,00,000+ lab tests booked | 20,00,000+ satisfied customers
              </Text>
            </Box>
            <Flex>
              {One.map((post) => (
                <Box
                  mt={{ base: "", md: "5px", lg: "25px" }}
                  width={{ base: "", md: "", lg: "100px" }}
                  borderRight={"2px"}
                  borderColor={"gray.200"}
                >
                  <Center>
                    <Image
                      src={post.img}
                      width={{ base: "10px", md: "25px", lg: "40px" }}
                    />
                  </Center>
                  <Text
                    mt={2}
                    textAlign={"center"}
                    fontSize={{ base: "10px", md: "12px", lg: "14px" }}
                    fontWeight={400}
                  >
                    {post.txt}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
        <Button _hover={{}} bgColor={"rgb(255,111,97)"}>
          <Text color={"white"} fontSize={"13px"}>
            VIEW POPULAR PACKAGES
          </Text>
        </Button>
      </Box>
    </Center>
  );
};

export default Lab;
