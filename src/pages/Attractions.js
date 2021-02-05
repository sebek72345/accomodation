import React from "react";
import Attraction from "../components/Attraction/Attraction";
import Title from "../components/Title/Title";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const StyledLi = styled.li`
  text-decoration: none;
  font-size: 20px;
  margin: 30px 5px 10px 5px;
  border-radius: 8px;
  background-color: #c3a182;
  padding: 10px 15px;
  flex-grow: 1;
  color: white;
`;
const InnerWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const additionalAttractions = [
  "Połoniny",
  "Tarnica",
  "Rezerwat Sine Wiry",
  "Bieszczadzka Szkoła Rzemiosła",
  "Park Gwiezdnego Nieba",
  "Jezioro Solińskie",
  "Bieszczadzkie Drezyny Rowerowe",
  "Bieszczadzka Kolejka Leśna",
  "Browar Ursa Maior",
  "Zagroda Żubrów",
];
export default function Attractions() {
  return (
    <MainWrapper>
      <Title
        title="ATRAKCJE W BIESZCZADACH"
        description="Przyroda w Bukowcu jest na wyciągniecie ręki, a leśne ścieżki wręcz namawiają do spacerów. Woda, las i otaczające dolinę wzgórza zapewniają bliski kontakt z naturą sprawiając, że jest to wymarzone miejsce do rekreacji i uprawiania turystyki aktywnej"
      />
      <Attraction
        title="Góra Korbania"
        desc="Góra Korbania (894 m n.p.m) z punktem widokowym na Jezioro Solińskie i wyższe
        partie Bieszczadów - początek szlaku – ok. 1km. Z Korbani można zejść do Przełęczy
        Hyrcza i udać się do zjawiskowej doliny dawnej wsi Łopienka."
        pics="https://mynaszlaku.pl/wp-content/gallery/korbania-10-10-2019/bieszczady-korbania-wieza.jpg"
      />
      <Attraction
        title="Rzeka Solinka – 1.5km"
        desc="Tarnica (1346,2 m) – najwyższy szczyt polskich Bieszczadów i województwa podkarpackiego, wznoszący się na krańcu pasma połonin, w grupie tzw. gniazda Tarnicy i Halicza. Należy do Korony Gór Polski. Szczyt Tarnicy wznosi się ponad 500 m nad dolinę Wołosatki i wyróżnia się osobliwą sylwetką."
        pics="https://i.pinimg.com/originals/f3/f6/f5/f3f6f59636276e135ed1d6829958b1e3.jpg"
      />
      <Attraction
        title="Zabytkowa dzwonnica"
        desc="W centrum wsi podziwiać XIX wieczne podmurówki dawnej  cerkwi z betonowymi
        schodami i ruiną mensy ołtarzowej. Obok znajduje się murowana, parawanowa
        dzwonnica."
        pics="https://cerkwie.podkarpacia.pl/Cerkwiska/BukowiecGmSolina/thumbs/20130623_154057.jpg"
      />
      <Attraction
        title="Śladami przodków"
        desc="Poszukiwaczy śladów dawnej kultury Łemków i Bojków zaciekawią na pewno doliny
        dawnych wsi Łopienki, Radziejowej czy Tyskowej, gdzie zachowały się stare cerkwiska
        i cmentarze."
        pics="https://lh3.googleusercontent.com/proxy/DiX7eV8qO39XXhLebWf_U1mriISqDfl1s4m5IG4YgZW6HkLL0xOQMLjbw4rVF9G5J8rgWDCdHeijnxR43UwGnYatxvsgcBg24Im-d92Fec04"
      />
      <Attraction
        title="Góry - Tarnica"
        desc="Tarnica (1346,2 m) – najwyższy szczyt polskich Bieszczadów i województwa podkarpackiego, wznoszący się na krańcu pasma połonin, w grupie tzw. gniazda Tarnicy i Halicza. Należy do Korony Gór Polski. Szczyt Tarnicy wznosi się ponad 500 m nad dolinę Wołosatki i wyróżnia się osobliwą sylwetką."
        pics="https://podrozebezosci.pl/wp-content/uploads/2019/01/tarnica-bieszczady-najwyzszy-szczyt-korona-gor-polski.jpg"
      />
      <Title description="To tylko przykładowe atrakcje mieszczące się w naszej okolicy. Nie sposób opisać wszystkiego, co oferują Bieszczady, lecz poniżej jeszcze kilka propozycji zdecydowanie wartych zobaczenia:" />
      <InnerWrapper style={{ listStyle: "none" }}>
        {additionalAttractions.map((item, index) => {
          return <StyledLi key={index}>{item}</StyledLi>;
        })}
      </InnerWrapper>
    </MainWrapper>
  );
}
