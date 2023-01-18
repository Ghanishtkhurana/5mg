import React from 'react'
import styled from 'styled-components'

export const Walllayoutcard = ({head1 ,head2 , btn , imageurl}) => {

  return (
    <Wallwrapper>

<Wallchild>
    <h1>{head1}</h1>
    <h3>{head2}</h3>
    <button  style={{height:"40px",width :"400px",color:"white" , 
                        backgroundColor:"#ff6f61", marginTop:"10px" , border:"transparent" , borderRadius:"7px"}} > {btn}</button>
</Wallchild>

<Wallchild>
<img  src ={imageurl} style={{width:"100%" , height:"300px"}} />
</Wallchild>

    </Wallwrapper>
  )
}



const Wallwrapper = styled.div`
// border :1px solid;
height :300px;
width:90%;
margin :auto;
margin-top : 20px;

display:grid;
background-color:#fff0e3;
grid-template-columns :repeat(2,1fr);
grid-template-rows :repeat(1,1fr);
gap:10px;

@media all and (min-width: 768px) and (max-width: 1024px) {
    
    height :650px;
    grid-template-columns :repeat(1,1fr);
    grid-template-rows :repeat(2,300px);
   
   }
   @media all and (min-width: 320px) and (max-width: 767px) {
    margin-top : 100px;;
    height :850px;
    grid-template-columns :repeat(1,1fr);
    grid-template-rows :repeat(2,400px);
}
`

const Wallchild = styled.div`
// border :1px solid red;
`