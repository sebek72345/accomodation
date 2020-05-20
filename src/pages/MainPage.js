import React from "react";
import Title from "../components/Title/Title";
import styled from "styled-components";
import GalleryMasonary from "../components/GalleryMasonary/GalleryMasonary";
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export default function Main() {
  return (
    <Wrapper>
      <Title
        title="O NAS"
        description="Witamy Was w Bieszczadach – miejscu gdzie wciąż można usłyszeć własne myśli. Jesteśmy szczęśliwi, że tutaj jest nasz azyl, więc chcemy dzielić się tą radością. Wiemy, że w dzisiejszym zabieganym świecie ciężko o chwilę wytchnienia, dlatego wierzymy, że z nami odpoczniecie i nabierzecie sił do nowych zadań."
      />
      <Title
        title="OFERTA"
        description="Zastanawialiśmy się co będzie najlepsze dla naszych Gości – po długim namyśle doszliśmy do wniosku, że przestrzeń. Dlatego zapewniamy dwa duże, w pełni wyposażone domki, które są dostępne przez okrągły rok. Przy każdym domku znajdziecie zadaszony taras oraz rozległe, ogrodzone podwórko z przestronną altaną, murowanym grillem i huśtawką. "
      />
      <Title title="GALERIA" />
      <GalleryMasonary title="Bieszczady" />
    </Wrapper>
  );
}
