import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export const CovidElem2 = () => {

    const [view,setView] = useState(false)




    const Viewdata =()=>{
    setView(current =>!current)
    }
console.log(view)
    const data1=[
        {
            id:1,
            url :"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Home_isolation_tips_by_Tata_1mg.png"
        },
           { 
             id:2,
            url:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/COVID-Omicron-Tata1mg.png"
        },
        {
            id:3,
            url :"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Double-masking-tips-by-1mg.png"
        }
    ]
    
    
        const data2 = [
            {
                id:1,
                url :"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Home_isolation_tips_by_Tata_1mg.png"
            },
               { 
                 id:2,
                url:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/COVID-Omicron-Tata1mg.png"
            },
            {
                id:3,
                url :"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Double-masking-tips-by-1mg.png"
            },
            {
                id:4,
                url:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Homecare-tips-for-mild-cases-by-1mg.png"
            },
            {
                id:5,
                url:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Coronavirus-Ebooks/English/newebbok.png"
            },
            {
                id:6,
                url:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Coronavirus-Ebooks/English/COVID-19-Testing-All-you-need-to-know-by-1mg.png"
            },
            
        ]


        let original
   
        if(view==false ){
             original = data1
          
        }else if(view==true){
            original = data2
           
        }


  return (
    <Box bg="#fef7ef">
<Box w="90%" m="auto" textAlign={"left"} mt="100px">
    <Text fontSize={"3xl"} fontWeight="bold" >Prepare, don't panic</Text>
    <Text fontSize={"23px"} >Counter misinformation and keep yourself updated about all COVID-related developments with concise booklets and guides. These guides, compiled by the team of doctors at Tata 1mg, are based on analysis of data by trusted sources such as the WHO, Lancet, National Institute of Communicable Diseases, South Africa, MoHFW & discussions with medical experts.</Text>
</Box>

<SimpleGrid  spacing={10} columns={[1, 1, 3]}>
 
{
    original.length>0 && original.map((el)=>{
        return(
            <Box key={el.id}>
                <Image src={el.url} />
            </Box>
        )
    })
}


  
</SimpleGrid>
<Text fontSize={"25px"} fontWeight="bold"   onClick={Viewdata}  >Show More +</Text>

    </Box>
  )
}
