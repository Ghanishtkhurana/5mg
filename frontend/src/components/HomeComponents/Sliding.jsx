import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box,Text } from "@chakra-ui/react";

const data=[
    {
        id:1,
        image:"https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/e5e112ad-6dfd-4b07-9fc0-b6ef94098a4d.png"
    },

    {
        id:2,
        image:"https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/f53e1730-d356-4672-b593-6dc4dfed7c5b.png"
    },

    {
        id:3,
        image:"https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/1ac0fa7b-aa7f-476d-9ba2-9869905595a0.png"
    },

    {
        id:4,
        image:"https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/a1ce5c99-dab1-4289-9257-479d0605a61f.png"
    },
    {
        id:5,
        image:"https://onemg.gumlet.io/31303ed7-be3f-4840-be58-ea2ebf5d7fcc_1660815255.jpg?w=899&h=200&format=auto"
    },
    {
        id:6,
        image:"https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/415a8222-0c6e-432f-8069-68a84ace061b.png"
    }
]

function Sliding(){

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
        <div>
      
<div>
<Slider {...settings}>
{
        data.map((item)=>(
            <Box key={item.id}>
            <img style={{width:"100%"}} src={item.image} alt="offers"/>
            </Box>
        ))
    }
</Slider>
</div>
 <Text marginTop="30px" fontSize="xl" fontWeight="bold" color="gray">Tata 5mg: India’s Leading Online Pharmacy & Healthcare Platform</Text>
        </div>
    )
}

export default Sliding;
