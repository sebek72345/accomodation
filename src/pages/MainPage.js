import React from "react";
import Title from "../components/Title/Title";
import styled from "styled-components";
import GalleryMasonary from "../components/GalleryMasonary/GalleryMasonary";
import cottage1 from "../images/lite/1.jpg";
import cottage2 from "../images/lite/2.jpg";
import cottage3 from "../images/lite/3.jpg";
import cottage4 from "../images/lite/4.jpg";
import cottage5 from "../images/lite/7.jpg";
import landspace1 from "../images/lite/9.jpg";
import landspace2 from "../images/lite/24.jpg";
import room1 from "../images/lite/rooms/1.jpg";
import room2 from "../images/lite/rooms/3.jpg";
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export default function Main() {
  const photos = [
    { src: cottage1, width: 4, height: 3 },
    { src: cottage2, width: 4, height: 3 },
    { src: cottage3, width: 4, height: 3 },
    { src: cottage4, width: 4, height: 3 },
    { src: cottage5, width: 4, height: 3 },
    { src: landspace1, width: 4, height: 3 },
    { src: landspace2, width: 4, height: 3 },
    { src: room1, width: 4, height: 3 },
    { src: room2, width: 4, height: 3 },
  ];
  return (
    <Wrapper>
      <Title
        title="O NAS"
        description="Od zawsze jesteśmy powiązani z Bieszczadami. Tu się urodziliśmy, tu pracujemy i tu doświadczamy ich uroku na co dzień. Naszą misja jest dawanie gościom skrawka bieszczadzkiej codzienności. Wierzymy, ze magia i urok Bieszczad z naszą małą
        pomocą pomaga Wam zapomnieć o troskach zabieganej codzienności. Przyjedźcie, rozpalcie ognisko i odpocznijcie."
      />

      <Title
        title="LOKALIZACJA"
        description="Bukowiec to miejscowość, która stanowi świetną bazę wypadową w pozostałe
        zakątki Bieszczadów.
        Idealne miejsce dla osób ceniących spokój i prywatność z dala od zgiełku turystów."
      />
      <Title title="GALERIA" />
      <GalleryMasonary title="Bieszczady" photos={photos} />
    </Wrapper>
  );
}
