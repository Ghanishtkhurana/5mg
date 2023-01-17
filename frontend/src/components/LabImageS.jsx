import { Box } from "@chakra-ui/react";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://i.postimg.cc/5y0B8mt8/1.png" },
  { url: "https://i.postimg.cc/d3x86T7p/2.png" },
  { url: "https://i.postimg.cc/3JkjR9VT/3.png" },
  { url: "https://i.postimg.cc/4Nj6hVRh/4.png" },
  { url: "https://i.postimg.cc/43gpWGdf/5.png" },
  { url: "https://i.postimg.cc/FKV3q6dj/6.png" },
  { url: "https://i.postimg.cc/XYFwKqn1/7.png" },
];

const LabImageS = () => {
  return (
    <Box>
      <SimpleImageSlider
        width={400}
        height={200}
        autoPlayDelay={2}
        autoPlay={true}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </Box>
  );
};

export default LabImageS;
