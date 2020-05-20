import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  position: sticky;
  top: 20px;
  width: 100px;
  right: 0;
  background-color: rgb(97, 125, 124);
  height: auto;
  border-radius: 0 15px 15px 0;

  color: white;
`;
const StyledParagraph = styled.h5`
  text-align: center;
  color: black;
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
