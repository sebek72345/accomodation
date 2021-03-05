import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";
const StyledDiv = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #c3a182;
  border-radius: 50%;
  cursor: pointer;
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  bottom: 10px;
  right: 10px;
  transition: 0.5s;
  background-color: #8a7777;
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
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > window.innerHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  return (
    <StyledDiv onClick={onClick} visible={visible}>
      <StyledIcon />
      <StyledIcon />
      <StyledIcon />
    </StyledDiv>
  );
}
