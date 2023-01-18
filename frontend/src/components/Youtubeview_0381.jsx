import React from 'react'
import styled from 'styled-components'

export const Youtube = () => {

  return (
    
    
    <Wallwrapper>

<Wallchild>
<iframe width="515" height="300" src="https://www.youtube.com/embed/P4TKxfj3tu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Wallchild>

<Wallchild>
<iframe width="515" height="300" src="https://www.youtube.com/embed/UN7fbohf0uw" title="What is antibody testing for COVID-19 || 1mg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Wallchild>

<Wallchild>
<iframe width="515" height="300" src="https://www.youtube.com/embed/H3H0XCyQgXY" title="Corona vaccine किसको मिलेगी? (latest India update in Hindi)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Wallchild>

<Wallchild>
<iframe width="515" height="300" src="https://www.youtube.com/embed/pso2qbEj0Y4" title="COVID-19 Vaccine in India [latest update in Hindi]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Wallchild>

    </Wallwrapper>
    
  )
}



const Wallwrapper = styled.div`
// border :1px solid;
height :600px;
width:80%;
display:grid;

grid-template-columns :repeat(2,1fr);
grid-template-rows :repeat(2,1fr);
gap:10px;
margin:auto;
margin-top : 20px;
margin-bottom:60px;
@media all and (min-width: 768px) and (max-width: 1024px) {
    
    height :650px;
    grid-template-columns :repeat(2,1fr);
    grid-template-rows :repeat(2,300px);
   
   }
   @media all and (min-width: 320px) and (max-width: 767px) {
    margin-top : 100px;
    margin-bottom :700px;
    height :850px;
    grid-template-columns :repeat(1,1fr);
    grid-template-rows :repeat(2,400px);
}
`

const Wallchild = styled.div`
// border :1px solid red;

`