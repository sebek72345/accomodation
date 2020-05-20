import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import Top from "../Top/Top";
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;
const StyledWrapper = styled.div`
  background-color: #000;
  padding: 40px 0;
  color: white;
`;
const StyledImg = styled.img`
  width: 150px;
`;

export default function Footer() {
  const toTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <StyledWrapper>
      <InnerWrapper>
        <address>
          <span>Adress</span>
          <br />
          Domki u Sokoła
          <br />
          Bukowiec 61
          <br />
          38-610 Polańczyk
        </address>
        <StyledImg src={logo} />
        <div>
          <span>Kontakt:</span>
          <br />
          <p>607 207 390</p>
          <p>601 071 840</p>
          <p>barbarasokoł@adresjakis.pl</p>
        </div>
      </InnerWrapper>
      <span style={{ textAlign: "center", display: "block" }}>
        Copyright © Domki u Sokoła 2020. All rights reserved
      </span>
      <Top onClick={toTop} />
    </StyledWrapper>
  );
}
