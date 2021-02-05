import React from "react";
import Images from "../components/GalleryMasonary/GalleryMasonary";
import styled from "styled-components";
import Title from "../components/Title/Title";
import cottage1 from "../images/lite/1.jpg";
import cottage2 from "../images/lite/2.jpg";
import cottage3 from "../images/lite/3.jpg";
import cottage4 from "../images/lite/4.jpg";
import cottage5 from "../images/lite/5.jpg";
import cottage6 from "../images/lite/6.jpg";
import cottage7 from "../images/lite/7.jpg";
import cottage8 from "../images/lite/8.jpg";
import cottage10 from "../images/lite/10.jpg";
import cottage11 from "../images/lite/11.jpg";
import cottage12 from "../images/lite/12.jpg";
import cottage13 from "../images/lite/13.jpg";
import cottage14 from "../images/lite/14.jpg";
import cottage15 from "../images/lite/15.jpg";
import cottage16 from "../images/lite/16.jpg";
import cottage17 from "../images/lite/17.jpg";
import cottage18 from "../images/lite/18.jpg";
import cottage19 from "../images/lite/19.jpg";
import cottage20 from "../images/lite/20.jpg";
import cottage22 from "../images/lite/22.jpg";
import GalleryMasonary from "../components/GalleryMasonary/GalleryMasonary";
const Wrapper = styled.div`
  width: 80%;
  margin: 15px auto 0 auto;
`;

function Cottage() {
  const photos = [
    { src: cottage1, width: 4, height: 3 },
    { src: cottage2, width: 4, height: 3 },
    { src: cottage3, width: 4, height: 3 },
    { src: cottage4, width: 4, height: 3 },
    { src: cottage5, width: 4, height: 3 },
    { src: cottage6, width: 4, height: 3 },
    { src: cottage7, width: 4, height: 3 },
    { src: cottage10, width: 4, height: 3 },
    { src: cottage11, width: 4, height: 3 },
    { src: cottage12, width: 4, height: 3 },
    { src: cottage13, width: 4, height: 3 },
    { src: cottage14, width: 4, height: 3 },
    { src: cottage15, width: 4, height: 3 },
    { src: cottage16, width: 4, height: 3 },
    { src: cottage17, width: 4, height: 3 },
    { src: cottage19, width: 4, height: 3 },
    { src: cottage20, width: 4, height: 3 },
    { src: cottage22, width: 4, height: 3 },
  ];
  return (
    <Wrapper>
      <Title title="OPIS" description="Opis domków" />
      <GalleryMasonary photos={photos} />
    </Wrapper>
  );
}

export default Cottage;
