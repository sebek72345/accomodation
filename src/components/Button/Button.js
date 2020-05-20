import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #c3a182;
  border-radius: 30px;
  padding: 15px 30px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 22px;
`;

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
