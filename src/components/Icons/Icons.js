import React from "react";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  width: 200px;
  height: 100px;
  box-shadow: 0 5px 12px 3px gray;
  justify-content: space-around;
  align-items: center;
  margin-left: 15px;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Position = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function Icons({ title, description, icons }) {
  return (
    <Position>
      <Wrapper>
        <AiOutlineHome size={40} />
        <InnerWrapper>
          <h5>Dane:</h5>
          <address>
            Noclegi u Sokoła <br />
            Bukowiec 61
            <br /> 36-610 Polańczyk
          </address>
        </InnerWrapper>
      </Wrapper>
      <Wrapper>
        <FiPhoneCall size={40} />
        <InnerWrapper>
          <h5>Kontakt:</h5>
          <span>607 207 390</span>
          <span>601 071840</span>
        </InnerWrapper>
      </Wrapper>
    </Position>
  );
}
