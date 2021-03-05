import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: justify;
`;
const StyledTitle = styled.h6`
  font-size: 28px;
  margin-bottom: 16px;
`;
const Wrapper = styled.div`
  margin: 20px 0;
`;

export default function Title({ title, description }) {
  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledParagraph>{description}</StyledParagraph>
    </Wrapper>
  );
}
