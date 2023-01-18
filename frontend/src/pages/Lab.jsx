import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  Icon,
  Grid,
  SimpleGrid,
  AspectRatio,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import LabImageS from "../components/LabImageS";
import { RxHome } from "react-icons/rx";
import { BsPlusCircle } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

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

const Two = [
  {
    txt: "Complete Blood Count",
  },
  {
    txt: "Thyroid profile Total",
  },
  {
    txt: "Diabetes Screening",
  },
  {
    txt: "Liver Function Test",
  },
  {
    txt: "Lipid Profile",
  },
  {
    txt: "COVID-RTPCR",
  },
];
const Three = [
  {
    txt: "USG Whole Abdomen",
  },
  {
    txt: "Electrocardiography",
  },
  {
    txt: "X - Ray Chest PA View",
  },
  {
    txt: "MRI Brain",
  },
  {
    txt: "MRI Cervical Spine",
  },
  {
    txt: "CT Scan (Head)",
  },
];

const Four = [
  {
    img: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
    txt: "Tata lmg Labs",
  },
  {
    img: "https://onemg.gumlet.io/diagnostics/mlkrsnvxj3yqtbzxo4wj_new.png?format=auto",
    txt: "Dr. Lal PathLabs Ltd.",
  },
  {
    img: "https://onemg.gumlet.io/diagnostics/9a1a8b6a-0430-11ed-a791-02f62d44fe04.png?format=auto",
    txt: "Thyrocare Technologies",
  },
  {
    img: "https://onemg.gumlet.io/diagnostics/Metropolis-logo_new.png?format=auto",
    txt: "Metropolis Laboratories",
  },
  {
    img: "https://onemg.gumlet.io/diagnostics/af9ae47c-e473-11eb-8bd0-028ca395ba2a.png?format=auto",
    txt: "Mahajan Imaging Center",
  },
  {
    img: "https://onemg.gumlet.io/diagnostics/8d2584e0-fde7-11ec-bb3f-023cc772570e.png?format=auto",
    txt: "Izen Imaging & Intervent",
  },
];

const Five = [
  {
    head: "Tata 1mg brings care to health",
    body: "Tata 1mg is India's leading digital healthcare platform. From ordering medicines online to consulting doctors online, Tata 1mg is that one place that aims to fulfill all your health needs within the comfort of your home. In fact, you don’t even need to visit the diagnostic labs to get tests done. Tata 1mg has got that covered too.",
  },
  {
    head: "Tata 1mg: Lab tests now at your doorstep",
    body: "Spending hours in a queue at a diagnostic lab or a hospital is now a thing of the past. With more than 45,00,000 lab tests booked, Tata 1mg labs is on a mission to give you a flawless healthcare experience by bringing  With Tata 1mg labs, you can choose the diagnostic lab of your preference and get the hassle-free experience of a diagnostic center at the comfort of your home.You can choose the diagnostic lab of your choice and get your lab tests done at discounted prices with the quality of service kept intact.Wondering how to book a lab test? It's simple. You just need to search and add your tests, select the lab of your choice and schedule your test as per your suitable time slot. Once your test gets confirmed, a phlebotomist will be assigned to a sample from your home.",
  },
  {
    head: "Need more help?",
    body: "Just give us a call (18002122323) and we will help you complete your order",
  },
  {
    head: "Certified labs: For accessible and affordable experience",
    body: "We partner with various recognized diagnostic labs to make sure that you have a safe and smooth experience. To ensure quality and hygiene in sample collection and high accuracy in results, we partner with labs that are certified by international bodies like ISO (International Organization for Standardization), NABL (National Accreditation Board for testing and calibration laboratories) and CAP (College of American Pathologists).",
  },
  {
    head: "The services we offer",
    body: "As India’s leading digital healthcare platforms, your health is our utmost priority. Apart from facilitating pathological tests, Tata 1mg is your one-stop place for booking radiology tests such as MRIs and CT scans. Not just this, we also offer a free package of diabetes tests for members of the Diabetes Care Plan. With a presence in cities like Delhi, Gurgaon, Noida, Mumbai, Pune, Hyderabad, Bangalore, Chennai, etc., through Tata 1mg, you can avail over 2,000 tests and get tested by 120+ top, verified labs at the best prices. You even have the option to compare tests and packages based on prices and lab ratings and choose accordingly. Need help with lab test results? Talk to more than 20 kinds of specialists on Tata 1mg and get your results verified by them. We have been making healthcare affordable and accessible since the day we started. We aim to bring care to health and continue doing so until everyone is well.Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists look into each order to give you a fulfilling experience.",
  },
];

const Lab = () => {
  return (
    <Box>
      {/* carousel Box  */}

      <Center>
        <Box>
          <Flex
            gap={10}
            mt={{base : "",md:"",lg:"10px"}}
            mb={10}
            flexDirection={{ base: "column", md: "column", lg: "row" }}
          >
            <Box>
              <LabImageS />
            </Box>
            <Box>
              <Center>
                <Box alignContent={"center"} margin="auto">
                  <Text
                    fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                    fontWeight={"500"}
                  >
                    Lab Test From The Comfort Of Your Home
                  </Text>
                  <Text
                    fontSize={{ base: "13px", md: "15px", lg: "17px" }}
                    fontWeight={"500"}
                  >
                    {" "}
                    50,00,000+ lab tests booked | 20,00,000+ satisfied customers
                  </Text>
                </Box>
              </Center>
              <Center>
                <Flex>
                  {One.map((post,i) => (
                    <Box
                    key={i}
                      mt={{ base: "5", md: "5px", lg: "25px" }}
                      width={{ base: "70px", md: "80px", lg: "100px" }}
                      borderRight={"2px"}
                      borderColor={"gray.200"}
                    >
                      <Center>
                        <Image
                          src={post.img}
                          width={{ base: "23px", md: "25px", lg: "40px" }}
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
              </Center>
            </Box>
          </Flex>
          <Button _hover={{}} bgColor={"rgb(255,111,97)"}>
            <Text color={"white"} fontSize={"13px"}>
              VIEW POPULAR PACKAGES
            </Text>
          </Button>
        </Box>
      </Center>

      {/* Popular lab tests & profiles  */}

      <Box m={3}>
        <Text
          fontSize={{ base: "15px", md: "17x", lg: "20px" }}
          fontWeight={500}
          letterSpacing={1}
        >
          Popular lab tests & profiles
        </Text>
      </Box>
      <Center>
        <Flex m={3} flexDirection={{ base: "column", md: "column", lg: "row" }}>
          {/* ONe   */}
          <Box border={"1px"} p={5} borderColor={"gray.400"}>
            <Flex gap={4} m={2}>
              <Icon
                as={RxHome}
                w={{ base: "", md: "", lg: "20px" }}
                h={{ base: "", md: "", lg: "20px" }}
              />
              <Text
                fontSize={{ base: "", md: "", lg: "15px" }}
                fontWeight={500}
              >
                HEALTH TEST AT YOUR HOME
              </Text>
            </Flex>
            <Box>
              <Grid templateColumns="repeat(2, 1fr)">
                {/* append  */}

                {Two.map((text,i) => (
                  <Flex gap={2} key={i} m={2}>
                    <Icon
                      as={BsPlusCircle}
                      w={{ base: "", md: "", lg: "20px" }}
                      h={{ base: "", md: "", lg: "20px" }}
                    />
                    <Text fontSize={{ base: "", md: "", lg: "15px" }}>
                      {text.txt}
                    </Text>
                  </Flex>
                ))}
                {/* map  */}
              </Grid>
            </Box>
          </Box>
          {/* Two  */}
          <Box border={"1px"} p={5} borderColor={"gray.400"}>
            <Flex gap={4} m={2}>
              <Icon
                as={RxHome}
                w={{ base: "", md: "", lg: "20px" }}
                h={{ base: "", md: "", lg: "20px" }}
              />
              <Text
                fontSize={{ base: "", md: "", lg: "15px" }}
                fontWeight={500}
              >
                VISIT A LAB NEAR YOU
              </Text>
            </Flex>
            <Box>
              <Grid templateColumns="repeat(2, 1fr)">
                {/* append  */}

                {Two.map((text,i) => (
                  <Flex gap={2} key={i} m={2}>
                    <Icon
                      as={BsPlusCircle}
                      w={{ base: "", md: "", lg: "20px" }}
                      h={{ base: "", md: "", lg: "20px" }}
                    />
                    <Text fontSize={{ base: "", md: "", lg: "15px" }}>
                      {text.txt}
                    </Text>
                  </Flex>
                ))}
                {/* map  */}
              </Grid>
            </Box>
          </Box>
        </Flex>

        {/* care plan  */}
      </Center>
      <Center>
        <Box
          mt={5}
          mb={5}
          ml={{ base: 0, md: 0, lg: 20 }}
          mr={{ base: 0, md: 0, lg: 20 }}
        >
          <Image src="https://onemg.gumlet.io/marketing/64acdb55-3fa0-4e67-8291-c7eaf21730da.png" />
        </Box>
      </Center>

      {/* Featured Labs  */}
      <Box p={10}>
        <Flex justifyContent={"space-between"}>
          <Text
            fontSize={{ base: "", md: "", lg: "20px" }}
            fontWeight={500}
            letterSpacing={1}
          >
            Featured Labs
          </Text>
          <Button _hover={{}} bgColor={"rgb(255,111,97)"}>
            <Text color={"white"} fontSize={"13px"}>
              VIEW ALL
            </Text>
          </Button>
        </Flex>
        {/* append  */}
        <SimpleGrid
          m={2}
          columns={{ base: 2, md: 4, lg: 6 }}
          gap={{ base: 12, md: 12, lg: 0 }}
        >
          {Four.map((post,i) => (
            <Box key={i}>
              <Center h={"100px"} bgColor="white">
                <Image
                  src={post.img}
                  width={{ base: "120px", md: "120px", lg: "120px" }}
                />
              </Center>
              <Text fontSize={{ base: "11px", md: "12px", lg: "13px" }}>
                {post.txt}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Iframe  */}
      <Center m={10}>
        <Flex flexDirection={{ base: "column", md: "column", lg: "row" }}>
          <Box width={{lg: "500px" }}>
            <Text
              textAlign={"left"}
              fontSize={{ base: "15px", md: "16px", lg: "18px" }}
              m={5}
              fontWeight={500}
            >
              UNCOMPROMISED QUALITY. RELIABLE RESULTS. ALWAYS.
            </Text>
            <Text
              m={5}
              textAlign={"left"}
              fontSize={{ base: "13px", md: "14px", lg: "15px" }}
            >
              Spending hours in a queue at a diagnostic lab or a hospital is now
              a thing of the past. With Tata 1mg you can get your lab tests done
              from the comfort of your home. Our highly qualified phlebotomist
              will collect the samples at your preferred time. Watch this video
              to see steps taken by us to ensure quality and hygiene in sample
              collection. Book your next lab test with Tata 1mg at the lowest
              price guaranteed!
            </Text>
          </Box>
          <Box>
            <AspectRatio width={{base : "",md:"",lg:"500px"}} ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/_Bk2_nFVRI0"
                allowFullScreen
              />
            </AspectRatio>
            {/* <iframe */}
          {/* //   src="https://www.youtube.com/embed/_Bk2_nFVRI0"  */}
            {/* // ></iframe> */}
          </Box>
        </Flex>
      </Center>

      {/* Txt slider  */}
      {/* <TxtSlide /> */}

      {/* BOOk Bulk  */}
      <Box p={10} bgColor={"rgb(251,251,251)"}>
        <Text
          fontSize={{ base: "11px", md: "12px", lg: "18px" }}
          fontWeight={500}
          m={2}
        >
          Want to book lab tests in bulk?
        </Text>
        <Text m={2} fontWeight={400}>
          Get customized health packages at best prices
        </Text>
        <Button _hover={{}} bgColor={"rgb(255,111,97)"}>
          <Flex>
            <Text color={"white"} fontSize={"13px"}>
              CONTACT US
            </Text>
            <Icon as={FiArrowRight} color={"white"} ml={2} />
          </Flex>
        </Button>
      </Box>
      {/* mobile app  */}
      <Box>
        <Center m={10}>
          <Box>
            <Box>
              <Flex flexDirection={{ base: "column", md: "column", lg: "row" }}>
                <Box width={{ base: "", md: "", lg: "500px" }}>
                  <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/v1572602488/store_creatives_mccvjq.png" />
                </Box>
                <Box mt={10}>
                  <Text
                    mt={{ base: 0, md: 0, lg: 10 }}
                    fontWeight={500}
                    textAlign="left"
                    fontSize={{ base: "18px", md: "20px", lg: "22px" }}
                  >
                    Download the TATA 1mg APP
                  </Text>
                  <Text
                    textAlign="left"
                    fontSize={{ base: "16px", md: "17px", lg: "18px" }}
                  >
                    Book diagnostics tests online with certified labs at best
                    prices
                  </Text>
                  {/* app  */}
                  <Flex mt={10} gap={6}>
                    <Image
                      src="https://onemg.gumlet.io/search_widget/google-badge_3x.png?format=auto"
                      width={"150px"}
                    />
                    <Image
                      src="https://onemg.gumlet.io/search_widget/appstore-badge_3x.png?format=auto"
                      width={"150px"}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Center>
      </Box>

      {/* Text part  */}
      <Box m={10}>
        {/* heading  */}
        <Text
          mt={1}
          mr={1}
          mb={2}
          textAlign={"left"}
          fontSize={{ base: "19px", md: "19px", lg: "20px" }}
          fontWeight={500}
        >
          Keep your health in check with Tata 1mg: Lab tests just a click away
        </Text>
        {/* body head  */}
        {Five.map((post,i) => (
          <Box mt={4} key={i}>
            {/* heading  */}
            <Text
              m={1}
              textAlign={"left"}
              fontSize={{ base: "17px", md: "18px", lg: "18px" }}
              fontWeight={500}
            >
              {post.head}
            </Text>
            {/* body  */}
            <Text
              m={1}
              textAlign={"left"}
              fontSize={{ base: "14px", md: "17px", lg: "18px" }}
            >
              {post.body}
            </Text>
          </Box>
        ))}
      </Box>
      <Box
        m={10}
        borderTop={"2px"}
        borderBottom={"2px"}
        borderColor={"gray.300"}
        p={5}
      >
        <Text
          fontSize={{ base: "18px", md: "20px", lg: "24px" }}
          fontFamily={"sans-serif"}
        >
          INDIA’S LARGEST HEALTHCARE PLATFORM
        </Text>
        <Center>
          <Flex m={10} gap={{base:20,md:100,lg:200}}>
            <Box>
              <Text
                fontSize={{ base: "18px", md: "22px", lg: "24px" }}
                fontFamily={"sans-serif"}
                fontWeight={700}
              >
                260m+
              </Text>
              <Text>Visitors</Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "18px", md: "22px", lg: "24px" }}
                fontFamily={"sans-serif"}
                fontWeight={700}
              >
                31m+
              </Text>
              <Text>Orders Delivered</Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "18px", md: "22px", lg: "24px" }}
                fontFamily={"sans-serif"}
                fontWeight={700}
              >
                1800+
              </Text>
              <Text>Cities</Text>
            </Box>
          </Flex>
        </Center>
      </Box>
      {/* Input  */}
      <Center>
        <Flex mb={5} gap={{base:1,md:3,lg:6}} mr={1} ml={1}>
          <Box>
            <Text
              fontSize={{ base: "11px", md: "12px", lg: "24px" }}
              fontWeight={500}
            >
              Get the link to download App
            </Text>
          </Box>
          <Box>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={"text"}
                placeholder="Enter Phone Number"
              />
              <InputRightElement width="4.5rem">
                <Button _hover={{}} bgColor={"rgb(255,111,97)"} pl={2} pr={2}>
                  <Text color={"white"} fontSize={"12px"}>
                    Send Link
                  </Text>
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default Lab;
