import React from "react";
import Images from "../components/Images/Images";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 15px auto 0 auto;
`;
const Title = styled.h3`
  font-size: 42px;
  font-weight: 600;
  font-family: Oswald;
  position: relative;
  margin-bottom: 46px;
  &::before {
    content: "";
    width: 3px;
    height: 50px;
    background-color: #c0a281;
    display: block;
  }
`;
function Cottage() {
  return (
    <Wrapper>
      <Title>GALERIA</Title>
      <Images />
    </Wrapper>
  );
}

export default Cottage;
