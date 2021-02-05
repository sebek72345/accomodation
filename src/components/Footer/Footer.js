import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import Top from "../Top/Top";
import "./Footer.css";
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;
const StyledWrapper = styled.div`
  background-color: #000;
  padding: 40px 0;
  color: white;
  position: relative;
`;
const StyledImg = styled.img`
  width: 150px;
`;

export default function Footer() {
  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log("click");
  };

  return (
    <div className="outerWrapper">
      <div className="wrapper-footer">
        <address className="adress">
          Dane:
          <br />
          <span>Domki u Sokoła</span>
          <br />
          <span>Bukowiec 61</span>
          <br />
          <span>38-610 Polańczyk</span>
          <br />
        </address>
        <img src={logo} alt="" className="logo" />
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Kontakt:</span>
          <a href="tel:601 071 840">607 207 390</a>
          <a href="tel:601 071 840">601 071 840</a>
          <a href="mailto:basia.sokol73@gmail.com">basia.sokol73@gmail.com</a>
        </div>
      </div>
      <span style={{ textAlign: "center", display: "block" }}>
        Copyright © Domki u Sokoła {new Date().getFullYear()}. All rights
        reserved
      </span>
    </div>
  );
}
