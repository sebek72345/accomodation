import React from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #c3a182;
  padding: 30px 0;
  font-size: 26px;
  font-weight: 600;
  max-width: 100vw;
  color: white;
`;
export default function Reserve() {
  return (
    <StyledWrapper>
      <span>SKONTAKTUJ SIĘ Z NAMI I ZAREZERWUJ</span>
      <span>607 207 390 / 601 071 840</span>
    </StyledWrapper>
  );
}
