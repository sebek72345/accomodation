import React from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #607a26;
  padding: 30px 0;
  margin-top: 40px;
  font-size: 26px;
  font-weight: 600;
  max-width: 100vw;
  color: white;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    font-size: 18px;
  }
`;
export default function Reserve() {
  return (
    <StyledWrapper>
      <span>SKONTAKTUJ SIĘ Z NAMI I ZAREZERWUJ</span>
      <span>607 207 390 / 601 071 840</span>
    </StyledWrapper>
  );
}
