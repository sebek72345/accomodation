import React from "react";
import GalleryMasonary from "../components/GalleryMasonary/GalleryMasonary";
import styled from "styled-components";
import Title from "../components/Title/Title";
import room1 from "../images/lite/rooms/1.jpg";
import room2 from "../images/lite/rooms/2.jpg";
import room3 from "../images/lite/rooms/3.jpg";
import room4 from "../images/lite/rooms/4.jpg";
import room5 from "../images/lite/rooms/5.jpg";
const Wrapper = styled.div`
  width: 80%;
  margin: 15px auto 0 auto;
`;

function Cottage() {
  const photos = [
    { src: room1, width: 4, height: 3 },
    { src: room2, width: 4, height: 3 },
    { src: room3, width: 4, height: 3 },
    { src: room4, width: 4, height: 3 },
    { src: room5, width: 4, height: 3 },
  ];
  return (
    <Wrapper>
      <Title
        title="OPIS"
        description="W naszym obiekcie posiadamy pokoje 2, 3 i 4osobowe z łazienkami i dostępem do aneksu kuchennego. Zielony, ogrodzony teren z bezpiecznym parkingiem, huśtawka, zjeżdżalnia, miejsce na grilla, ognisko, leżaki oraz osobne wejście dla gości."
      />

      <GalleryMasonary photos={photos} />
    </Wrapper>
  );
}

export default Cottage;
