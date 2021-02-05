import React from "react";
import styled from "styled-components";

const StyledAttractionWrapper = styled.div``;
const StyledImg = styled.img`
  float: left;
  width: 300px;
  height: auto;
  margin: 5px 10px;
`;

const MainWrapper = styled.div`
  width: 80%;
  border: 1px solid black;
  margin: 20px auto;
  height: auto;
  padding: 15px;
  border-radius: 15px;
`;

export default function Attraction({ title, desc, pics }) {
  return (
    <MainWrapper>
      <StyledAttractionWrapper>
        <div
          style={{
            textAlign: "center",
            fontSize: "26px",
            marginBottom: "16px",
          }}
        >
          {title}
        </div>
        <StyledImg src={pics} alt="" />
        <div style={{ textAlign: "justify" }}>{desc}</div>
        <div style={{ clear: "both" }}></div>
      </StyledAttractionWrapper>
    </MainWrapper>
  );
}
