import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
const Wrapper = styled.div`
  position: sticky;
  top: 20px;
  width: 100px;
  left: 0;
  background-color: #607a26;
  height: auto;
  border-radius: 0 15px 15px 0;
  z-index: 18;
  color: white;
  font-size: 20px;
  padding: 5px 2px 5px 0;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const StyledParagraph = styled.h5`
  text-align: center;
  color: black;
  z-index: 18;
  padding-top: 12px;
`;
const StyledIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  &:hover {
    cursor: pointer;
  }
`;

export default function SocialMedia() {
  return (
    <Wrapper>
      <StyledParagraph>Social Media</StyledParagraph>
      <StyledIcon>
        <a
          href="https://www.instagram.com/okiembieszczadzkim/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram size={50} />
        </a>
        <a
          href="https://www.facebook.com/Noclegi-u-Soko%C5%82a-749247081868198/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineFacebook size={50} />
        </a>
      </StyledIcon>
    </Wrapper>
  );
}
