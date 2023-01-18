import { Box, Text } from "@chakra-ui/react";
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

const txt = [
  {
    txt: "l got my wife's pregnancy tests done from 1 mg. A trained technical visited to collect samples and all reports were delivered on time before her doctor's appointment. Will surely choose lmg for the upcoming tests ",
    write: "Vijay",
  },
  {
    txt: "My first booking experience with lmg was simple and hassle-free. Selected sample collection slot on their app and the technician arrived right on time in the morning. Very impressive",
    write: "Nikita",
  },
  {
    txt: "l regularly get tests done for my father, who is a diabetic patient. I like the convenience of home sample collection and quick delivery of test reports on my email.",
    write: "Smriti",
  },
  {
    txt: "l was surprised to see the wide selection of labs and tests on lmg. Now I can compare tests and packages based on prices and lab ratings and choose the best one for me and my family.",
    write: "Chirag",
  },
  {
    txt: "l had to get an MRI done for my mother and a relative recommended 1 mg. Booked the test online with a reputed lab near my home. Received a call from lmg's radiology expert who us with test preparation instructions and appointment details. The experience inside lab very good.",
    write: "Annesha",
  },
];

export const TxtSlide = () => {
  return (
    <Box>
      <SimpleImageSlider
        width={400}
        height={200}
        autoPlayDelay={2}
        autoPlay={true}
        // images={images}
        showBullets={true}
        showNavs={true}
      >
        {txt.map((post) => (
          <Box>
            <Text fontSize={"20px"}>
                {post.txt}
            </Text>
            <Text fontSize={"17px"}>
                {post.write}
            </Text>
          </Box>
        ))}
      </SimpleImageSlider>
    </Box>
  );
};

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
        // showNavs={true}
      />
    </Box>
  );
};

export default LabImageS;
