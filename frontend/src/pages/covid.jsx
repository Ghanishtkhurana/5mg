import { Box, Button, Image, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { CovidElem } from '../components/covidElem1'
import { CovidElem2 } from '../components/CovidElem2'

export const Covid = () => {
  return (
    <Box>
        <SimpleGrid columns={[1,1,2]} bg='#fdf0df'   spacing={10}>
  <Box    height={{base:"600px", md:"620px" , lg:"500px"}}  >
    <Text mt="70px" fontWeight={"bold"} fontSize={{base:"2xl",md:"3xl",lg:"4xl"}}  >Combating Coronavirus in India</Text>
  <Text mt="40px" color="#8c8c8c" textAlign={"center"} fontSize="20px" >As we are staring at a potential rise of coronavirus in India,<br/>testing, tracing and treating is the ideal way of curbing this spread. <br/>Testing on time helps provide early treatment which, in turn, prevents <br/>the spread to your loved ones and others around you.</Text>
  <hr/>
  <Text fontWeight={"bold"}color="#8c8c8c" fontSize="20px" mt="40px" >Experiencing COVID-like symptoms? To book a COVID-19 test at home, call on</Text>
  <Text fontWeight={"bold"} fontSize="30px" mt="40px" >1800- 212- 2353</Text>
  
  </Box>
  <Box    height={{base:"400px", md:"620px" , lg:"500px"}}  >

    <Image  w={{base:"100%",md:"80%",lg:"75%"}}  m="auto" mt="30px" src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/img-head.png"  />
  </Box>
 
</SimpleGrid>
{/* element 1 */}
<CovidElem    
head1 ="COVID-19 RT-PCR test"
head2 ="Gold standard test to detect active coronavirus infection"
btn ="Book Now"
imgurl ="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/rtpcr.png"
/>



<Box w="90%" m="auto" mt="40px">
<Text fontWeight="bold" mt="50px" textAlign={"left"} fontSize={"4xl"} >COVID Essentials: Everything you need</Text>
<SimpleGrid columns={[1, 2, 3]} spacing='40px'>
  <Box  height={{base:"400px", md:"auto" , lg:"420px"}} borderRadius="10px">
    <Image w="100%" h="100%"  src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/cold-cough.png" />
  </Box>

  <Box  height={{base:"400px", md:"auto" , lg:"420px"}} borderRadius="10px">
    <Image w="100%" h="100%"  src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/track-your-vitals.png" />
  </Box>

  <Box  height={{base:"400px", md:"auto" , lg:"420px"}} borderRadius="10px">
    <Image w="100%" h="100%"  src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand-wash.png" />
  </Box>

  <Box  height={{base:"400px", md:"auto" , lg:"420px"}} borderRadius="10px">
    <Image w="100%" h="100%"  src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/mask&face.png" />
  </Box>

  <Box  height={{base:"400px", md:"auto" , lg:"420px"}} borderRadius="10px">
    <Image w="100%" h="100%"  src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/immunity.png" />
  </Box>
  <Box  height={{base:"400px", md:"auto" , lg:"420px"}} borderRadius="10px">
    <Image w="100%" h="100%"  src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/disinfectants.png" />
  </Box>
</SimpleGrid>
</Box>



<Box w="95%" m="auto" mt="40px"    >
<Text textAlign={"left"} fontWeight="bold" mt="50px" fontSize={"4xl"} >COVID Management & Home Care Tests</Text>


<SimpleGrid columns={[1, 1, 3]} spacing='40px'>
    {/* bOX1 */}
  <Box   bg="#fbeaf0" height={{base:"700px", md:"680px" , lg:"570px"}} borderRadius="9px">
<Text fontWeight={"bold"} fontSize={"3xl"} color="#993859"  >COVID Antibody IgG (Quantitative)</Text>
<hr  />
<Text fontSize={"25px"} color="#993859" >The Antibody Test detects any past occurrence of the infection by looking for COVID-19 antibodies</Text>

<hr/>

<Text fontWeight={"bold"}   fontSize={"25px"} color="#993859">Who should take the test ?</Text>
<UnorderedList textAlign={"center"} fontSize={"20px"} color="#993859">
  <ListItem>Think you contracted the coronavirus in the past and have already recovered</ListItem>
  <ListItem>Want to know if your body has encountered the infection and made antibodies against the coronavirus</ListItem>
  <ListItem>Have recovered from COVID-19 and want to help people who need plasma therapy</ListItem>
  
</UnorderedList>
<Button  bg="#993859" color="white" h="60px"  fontSize={"2xl"}  mt="57px" w="100%">Book Now </Button>
  </Box>
  {/* BOX1 ENDING */}
  {/* BOX2 */}
  <Box    bg="#effff5"   height={{base:"700px", md:"680px" , lg:"570px"}} borderRadius="9px">
<Text fontWeight={"bold"} fontSize={"3xl"} color="#4b5e4c" >Covid Home Care Essential</Text>
<hr  />
<Text fontSize={"25px"}  >The COVID Home Care Essential package offers 33 tests (Includes CRP, CBC with NLR, ESR, BUN and more).</Text>

<hr/>

<Text fontWeight={"bold"} color="#4b5e4c"   fontSize={"25px"} >This test is recommended if you:</Text>
<UnorderedList textAlign={"center"} fontSize={"20px"} >
  <ListItem>Have been diagnosed with COVID-19 and need to understand how COVID-19 has impacted your health</ListItem>
  <ListItem>Are getting COVID-19 care at home and notice any worsening of the symptoms</ListItem>
  <ListItem>Have been advised by the doctor to check your biomarkers</ListItem>
  
</UnorderedList>
<Button  bg="#4b5e4c" color="white"  h="60px" fontSize={"2xl"}  mt="65px" w="100%">Book Now </Button>
  </Box>
  {/* BOX2 */}
  {/* BOX3 */}
  <Box  bg="#fdedbe"  height={{base:"700px", md:"680px" , lg:"570px"}} borderRadius="9px">
<Text fontWeight={"bold"} fontSize={"3xl"} color="#72582e" >COVID Home Care Complete</Text>
<hr  />
<Text fontSize={"25px"}  >The COVID Home Care Complete package offers 41 tests (Includes D-Dimer, IL-6, HbA1c, Serum electrolytes, etc., in addition to CRP.</Text>

<hr/>

<Text fontWeight={"bold"}    fontSize={"25px"} color="#72582e" >This test is recommended if you:</Text>
<UnorderedList textAlign={"center"} fontSize={"20px"} >
  <ListItem>Have been diagnosed with COVID-19 and need to understand how COVID-19 has impacted your health</ListItem>
  <ListItem>Are getting COVID-19 care at home and notice any worsening of the symptoms</ListItem>
  <ListItem>Have been advised by the doctor to check your biomarkers</ListItem>
  
</UnorderedList>
<Button h="60px" bg="#72582e" color="white" fontSize={"2xl"}  mt="17px" w="100%">Book Now </Button>
  </Box>
  {/* BOX3 */}
</SimpleGrid>

</Box>


<CovidElem2 />

<CovidElem    
head1 ="COVID-19 & latest treatment modalities"
head2 ="To prepare for the imminent threats of this virus, scientists and researchers are constantly Working ."
btn ="Read This Article"
imgurl ="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand.png"
/>


<CovidElem    
head1 ="Medicine for Covid-19"
head2 ="Has your doctor prescribed COVID treatment based on monoclonal antibodies?"
btn ="Find It Here"
imgurl ="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/monoclonal_dweb.png"
/>


<CovidElem    
head1 ="Think you may have COVID-19?"
head2 ="Talk to a qualified doctor online for FREE & get expert guidance"
btn ="Call Now"
imgurl ="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/talk-now.png"
/>

{/* Youtube videos */}

<Box w="90%" m="auto" mt="100px" bg="#fef7ef" >
    <Text fontWeight={"bold"} fontSize={{base:"15px", md:"20px",lg:"35px"}}  textAlign="center" >Watch these detailed videos to get answers to commonly asked questions on coronavirus in India:</Text>
<SimpleGrid columns={[1, 2, 2]} spacing='10px'>
  <Box  height={{base:"400px" , md:"400px", lg:"400px"}}  w={{base:"400px" , md:"400px", lg:"600px"}}   >
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/P4TKxfj3tu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Box>
  <Box  height={{base:"400px" , md:"400px", lg:"400px"}} w={{base:"400px" , md:"400px", lg:"600px"}} >
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UN7fbohf0uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Box>
  <Box  height={{base:"400px" , md:"400px", lg:"400px"}} w={{base:"400px" , md:"400px", lg:"600px"}}>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/H3H0XCyQgXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Box>
  <Box  height={{base:"400px" , md:"400px", lg:"400px"}} w={{base:"400px" , md:"400px", lg:"600px"}}>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pso2qbEj0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Box>
  
</SimpleGrid>
</Box>

<CovidElem    
head1 ="Think you have fever, cold or cough?"
head2 ="Talk to our experts online"
btn ="CONSULT Now"
imgurl ="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/consult-doc.png"
/>


    </Box>
  )
}
