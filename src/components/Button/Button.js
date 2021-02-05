import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #607a26;
  border-radius: 30px;
  padding: 15px 30px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 22px;
  margin-bottom: 15px;
  margin-top: 20px;
`;

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
