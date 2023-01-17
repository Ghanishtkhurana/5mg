import React, { useState } from 'react'
import styled from "styled-components"


export const Prepare = () => {
const [view,setView] = useState(false)




const Viewdata =()=>{
setView(current =>!current)
}

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

let Hindidata3 = [
    {
        id :1,
        url:"https://res.cloudinary.com/du8msdgbj/image/upload/v1586250984/marketing/whzp9jmz86edz4kebcex.jpg"
    },
    {
        id :2,
        url:"https://res.cloudinary.com/du8msdgbj/image/upload/v1586411740/marketing/u5my7vlivchlneubzvmk.jpg"
    },
    {
        id :3,
        url:"https://res.cloudinary.com/du8msdgbj/image/upload/v1586411713/marketing/nwsfuarm2fdwcppos5ns.jpg"
    },
    {
        id :4,
        url:"https://res.cloudinary.com/du8msdgbj/image/upload/v1586254044/marketing/ampzv5cxloxj88xdakeo.jpg"
    },
]

   




let original
   
if(view==false ){
     original = data1
  
}else if(view==true){
    original = data2
   
}


  return (
    <div  style={{backgroundColor:"#fef7ef" , marginTop:"50px"}}> 
<h1 style={{color:"#444444"}}>Prepare, don't panic</h1>
<h3 style={{color:"#444444"}}>
    Counter misinformation and keep yourself updated about all COVID-related 
    developments with concise booklets  and guides.<br/> These guides, compiled by
     the team of doctors at Tata 1mg, are based on analysis of data by trusted
      sources such as the WHO, Lancet, <br/>National Institute of Communicable Diseases,
       South Africa, MoHFW & discussions with medical experts.</h3>
    <Preparecov >
          

          {
            original.length>0 && original.map((item)=>{
                return <div key={item.id}>
                        <img src={item.url} style={{height:"400px",width :"400px"}}  />
                        <button  style={{height:"40px",width :"400px",color:"white" , 
                        backgroundColor:"#ff6f61", marginTop:"10px" , border:"transparent" , borderRadius:"7px"}} >DOWNLOAD E-BOOK</button>
                    </div>
                
            })
          }

    </Preparecov>

     <div onClick={Viewdata} >
    <h1 style={{color:"#797877"}}>Show More</h1>
     </div>

    </div>
  )
}

const Preparecov = styled.div`
// border:1px solid ;
width:90%;
display :grid ;
grid-template-columns :repeat(3,1fr);
grid-template-rows :repeat(original ? 2 : 1,450px);
gap: 10px;
margin:auto;
text-align:centre;

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