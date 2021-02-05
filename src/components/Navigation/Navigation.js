import React from "react";
import logo from "./../../images/logo.svg";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import hero from "./../../images/lite/hero.jpg";
import home from "./../../images/images/20.jpg";
import { MdPhone } from "react-icons/md";
import Button from "../Button/Button";
import SocialMedia from "../SocialMedia/SocialMedia";
import { withRouter } from "react-router";
import routers from "../../routers";
import "./Navigation.css";
import { GiHamburgerMenu } from "react-icons/gi";

const StyledWrapper = styled.div`
  height: ${({ lower }) => `${lower ? "60vh" : "90vh"}`};
  background-color: #ddd;
  width: 100%;
  background-image: url(${({ lower }) => `${!lower ? hero : home}`});
  background-position: center;
  background-size: cover;
  margin-bottom: 100px;
  box-shadow: 5px 5px 50px 15px #617a36;
`;
const SocialMediaWrapper = styled.div`
  position: fixed;
  top: 200px;
  left: 0px;
  z-index: 20;
`;
function Navigation(props) {
  const path = props.location.pathname.slice(1);
  const lowerHero = (() => path !== "")();
  const toggleModal = props.toggleModal;
  console.log();

  return (
    <StyledWrapper className="wrapper" lower={lowerHero}>
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <div style={{ position: "fixed", right: 0 }}>
        <div
          className="hamburger"
          onClick={() => {
            toggleModal();
            console.log("click");
          }}
        >
          <GiHamburgerMenu style={{ borderRadius: "15px" }} />
        </div>
      </div>
      <nav className="navigation">
        <ul className="navList">
          <NavLink
            exact
            className="link"
            activeClassName="activeLink"
            to={routers.home}
          >
            Strona Główna
          </NavLink>
          <NavLink
            className="link"
            activeClassName="activeLink"
            to={routers.cottages}
          >
            Domki
          </NavLink>
          <NavLink
            className="link"
            activeClassName="activeLink"
            to={routers.rooms}
          >
            Pokoje
          </NavLink>
          <NavLink
            className="link"
            activeClassName="activeLink"
            to={routers.attractions}
          >
            Atrakcje
          </NavLink>
          <NavLink
            className="link"
            activeClassName="activeLink"
            to={routers.contact}
          >
            Kontakt
          </NavLink>
        </ul>
        <div id="contact">
          <h4>REZERWACJA</h4>
          <div className="phone-number">
            <MdPhone size={50} />
            <div>
              <h6>607 207 390</h6>
              <h6>607 555 390</h6>
            </div>
          </div>
        </div>
      </nav>
      {lowerHero ? (
        <div className="position">
          <Link
            to={routers.home}
            style={{ textDecoration: "none", textTransform: "capitalize" }}
          >
            Strona główna
          </Link>
          <span style={{ color: "white" }}>->{path}</span>
        </div>
      ) : (
        <div className="description-nav">
          <h4>Noclegi u Sokoła</h4>
          <h4>Pokoje oraz domki wakacyjne </h4>
          <h4>w samym sercu Bieszczad </h4>
          <Button>
            <Link to={routers.contact} style={{ textDecoration: "none" }}>
              Zarezerwuj
            </Link>
          </Button>
        </div>
      )}
      <SocialMediaWrapper>
        <SocialMedia />
      </SocialMediaWrapper>
    </StyledWrapper>
  );
}
export default withRouter(Navigation);
