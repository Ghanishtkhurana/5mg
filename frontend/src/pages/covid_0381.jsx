import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"
import { CovidEss } from '../components/covidess_0381'
import { Prepare } from '../components/Prepare_0381'
import { Walllayoutcard } from '../components/walllayout_0381'
import { Youtube } from '../components/Youtubeview_0381'





export const Covid = () => {
  return (
    <div> 
        <h1>Covid 19  page</h1>
   <Covidepagewrapper>

<Box1>
<h1>Combating Coronavirus  <br/> in India</h1>
<h3 style={{color:"#6b7877"}}>
As we are staring at a potential rise of coronavirus in India,<br/>
 testing, tracing and treating is the ideal way of curbing this spread.<br/>
  Testing on time helps provide early treatment which,<br/>
   in turn, prevents the spread to your loved ones and others around you.<br/>
</h3>
<hr/>
<h3 style={{color:"#6b7877"}} >Experiencing COVID-like symptoms? To book a COVID-19 test at home,<br/>
     call on</h3>
     <h1>1800- 212- 2353</h1>
</Box1>

<Box2>
<img  src ="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/img-head.png" 
style={{width :"80%" , marginTop:"35px"}}
/>
</Box2>
   </Covidepagewrapper  >



<Walllayoutcard 
head1 ="COVID-19 RT-PCR test" 
head2 ="Gold standard test to detect active coronavirus  infection"
 btn ="BOOK NOW"
  imageurl ="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/rtpcr.png"
/>

<h1 style={{textAlign:"centre"}} >COVID Essentials: Everything you need</h1>


{/* --------- */}
<CovidEss/>

<h1 >COVID Management & Home Care Tests</h1>
<HomecareTest>

<Homechild style={{backgroundColor:"#fbeaf0"}}>
    <h1 style={{color:"#993859"}}>COVID Antibody IgG (Quantitative)</h1>
<p style={{color:"#993859"}}>
The Antibody Test detects any past <br/>
 occurrence of theinfection by<br/>
  looking for COVID-19 antibodies<br/>
</p>
<h2 style={{color:"#993859"}}>Who should take the test ?</h2>
<ul style={{type: "circle",color:"#993859"}}>
   <li>Think you contracted the coronavirus <br/> in the past and have already recovered</li>
   <li>Want to know if your body has encountered <br/>the infection and made antibodies against the coronavirus</li>
   <li>Have recovered from COVID-19 and want to<br/> help people who need plasma therapy</li>
</ul>
<div style={{height:"60px",width:"99.99%",color:"white", border:"1px solid",backgroundColor:"#993859", marginTop:"77px",borderRadius:"9px"}}>
    <h2>Book Now</h2>
    
    </div>
</Homechild>

<Homechild style={{backgroundColor:"#effff5"}}>
    <h1 style={{color:"#2bb673"}}>Covid Home Care Essential</h1>
<p style={{color:"#2bb673"}}>
The COVID Home Care Essential package offers 33 tests <br/>
(Includes CRP, CBC with NLR, ESR, BUN and more)<br/>
 that give important clues about the various health parameters.
</p>
<h2 style={{color:"#2bb673"}}>This test is recommended if you:</h2>
<ul style={{type: "circle",color:"#2bb673"}}>
   <li>Have been diagnosed with COVID-19 and need <br/> to understand how COVID-19 has  impacted your health</li>
   <li>Are getting COVID-19 care at home and notice <br/>any worsening of the symptoms</li>
   <li>Have been advised by the doctor <br/> to check your biomarkers</li>
</ul>
<div style={{height:"60px",width:"99.99%",color:"white", border:"1px solid",backgroundColor:"#2bb673", marginTop:"34px",borderRadius:"9px"}}>
    <h2>Book Now</h2>
    
    </div>
</Homechild>

<Homechild style={{backgroundColor:"#fdedbe"}}>
    <h1 style={{color:"#72582e"}}>COVID Home Care Complete</h1>
<p style={{color:"#72582e"}}>
The COVID Home Care Complete package offers 41 <br/>
 tests (Includes D-Dimer, IL-6, HbA1c, Serum electrolytes,
  etc., in addition to CRP, CBC with NLR, ESR, and more)
   that give important clues about the various health parameters.
</p>
<h2 style={{color:"#72582e"}}>This test is recommended if you:</h2>
<ul style={{type: "circle",color:"#72582e"}}>
   <li>Have been diagnosed with COVID-19 and need to understand how COVID-19 has impacted your health</li>
   <li>Are getting COVID-19 care at home and notice any worsening of the symptoms</li>
   <li>Have been advised by the doctor to check your biomarkers</li>
</ul>
<div style={{height:"60px",width:"99.99%",color:"white", border:"1px solid",backgroundColor:"#72582e", marginTop:"34px",borderRadius:"9px"}}>
    <h2>Book Now</h2>
    
    </div>
</Homechild>



</HomecareTest>
<Prepare/>

<Walllayoutcard
head1="COVID-19 & latest treatment modalities"
head2 ="To prepare for the imminent threats of this virus, scientists and researchers are constantly developing newer treatment strategies. One such new treatment option includes monoclonal antibodies. Want to know more about these available treatments and how they work against COVID variants, including Delta and Omicron?"
btn="Read This Article"
imageurl="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand.png"

/>

<Walllayoutcard
head1="Has your doctor prescribed COVID treatment based on monoclonal antibodies?"
head2 ="Medices"
btn="Find It here"
imageurl="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/monoclonal_dweb.png"

/>

<Walllayoutcard
head1="Think you may have COVID-19?"
head2 ="Talk to a qualified doctor online for FREE & get expert guidance"
btn="Call Now"
imageurl="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/talk-now.png"

/>
<h1>Watch these detailed videos to get answers to commonly <br/> asked questions on coronavirus in India:</h1>
<Youtube/>

<Walllayoutcard
head1="Think you have fever, cold or cough?"
head2 ="Talk to our experts online"
btn="Consult Now"
imageurl="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/consult-doc.png"

/>
   </div>
  )
}



const Covidepagewrapper = styled.div`
background :#fdf0df;
height :500px;

@media all and (min-width: 1024px)  {
   
    display:grid;
    grid-template-columns :repeat(2,1fr);
    gap:20px 20px;
   }

@media all and (min-width: 768px) and (max-width: 1024px) {
   
  margin :auto

  }
  @media all and (min-width: 320px) and (max-width: 767px) {
    grid-template-columns :repeat(1,40%);
   height :1000px
  }
`

const Box1 = styled.div`
// border : 1px solid black;
height :450px;
margin-top : 10px;
text-align: center;
@media all and (min-width: 768px) and (max-width: 1024px) {
   
   height :250px;

  }
  @media all and (min-width: 320px) and (max-width: 767px) {
    
   height :700px;
 
  }
`

const Box2 = styled.div`
// border : 1px solid black;
height :450px;
margin-top : 10px;

@media all and (min-width: 768px) and (max-width: 1024px) {
   
height :650px;
margin-bottom:400px;

   }
   @media all and (min-width: 320px) and (max-width: 767px) {
     
    height :400px;
   }
`





const HomecareTest = styled.div`
// border : 1px solid black;
display:grid;
margin:auto;


    grid-template-columns :repeat(3,1fr);
    grid-template-rows :repeat(1,550px);
    gap:20px 20px;
    width:90%;
   @media all and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns :repeat(2,1fr);
    grid-template-rows :repeat(2,600px);
    gap:10px;
   }
   @media all and (min-width: 320px) and (max-width: 767px) {
    grid-template-columns :repeat(1,1fr);
    grid-template-rows :repeat(3,600px);
}


`

const Homechild = styled.div`
// border : 1px solid red;
text-align:centre;
border-radius:9px;

`