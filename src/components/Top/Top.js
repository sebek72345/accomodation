import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";
const StyledDiv = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #c3a182;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  bottom: 10px;
  right: 50px;
  transition: 0.5s;
  &:hover {
    background-color: #c3a182;
  }
`;
const StyledIcon = styled(MdKeyboardArrowUp)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
  transition: 1s;
  ${StyledDiv}:hover & {
    transform: translate(-50%, -300%) scale(1.5);
  }
`;
export default function Top({ onClick }) {
  return (
    <StyledDiv onClick={onClick}>
      <StyledIcon />
      <StyledIcon />
      <StyledIcon />
    </StyledDiv>
  );
}
