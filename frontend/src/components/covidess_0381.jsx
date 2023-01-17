import React from 'react'
import styled from "styled-components"


export const CovidEss = () => {


    const data = [
        {
            id:1,
            url :"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/cold-cough.png"
        },
           { 
             id:2,
            url:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/track-your-vitals.png"
        },
        {
            id:3,
            url :"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand-wash.png"
        },
        {
            id:4,
            url:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/mask&face.png"
        },
        {
            id:5,
            url:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/immunity.png"
        },
        {
            id:6,
            url:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/disinfectants.png"
        },
        
    ]

  return (
    <div> 

    <Preparecov >
          

          {
            data.length>0 && data.map((item)=>{
                return <div >
                        <img src={item.url} style={{height:"400px",width :"400px"}}  />
                    </div>
                
            })
          }

    </Preparecov>
    </div>
  )
}

const Preparecov = styled.div`
// border:1px solid ;
width:90%;
display :grid ;
grid-template-columns :repeat(3,1fr);
grid-template-rows :repeat(2,450px);
gap: 10px;
margin:auto;

@media all and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns :repeat(2,1fr);
    grid-template-rows :repeat(3,400px);
    gap:10px;
   }

   @media all and (min-width: 320px) and (max-width: 767px) {
    grid-template-columns :repeat(1,1fr);
    grid-template-rows :repeat(1,450px);
}

`

