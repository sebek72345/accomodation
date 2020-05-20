import React from "react";
import logo from "./../../images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hero from "./../../images/images/19.jpg";
import home from "./../../images/images/20.jpg";
import { MdPhone } from "react-icons/md";
import Button from "../Button/Button";
import SocialMedia from "../SocialMedia/SocialMedia";
import { withRouter } from "react-router";
import routers from "../../routers";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  max-width: 100vw;
  height: ${({ lower }) => `${lower ? "60vh" : "90vh"}`};
  padding-top: 20px;
  background: url(${hero}) bottom center / cover no-repeat;
  position: relative;
  background: ${({ lower }) =>
    `url(${lower ? home : hero}) bottom center / cover no-repeat`};
`;
const StyledLists = styled.ul`
  display: flex;
`;
const StyledLi = styled.li`
  display: flex;
  height: calc(30px + 15px + 15px);
  flex-direction: column;
  text-decoration: none;
  padding: 15px 15px;
  margin-top: 22px;
  border-top: 2px solid #c0a281;
  border-bottom: 2px solid #c0a281;
  color: white;
  transition: 0.8s;
  &::before {
    content: "";
  }
  &:hover {
    background-color: rgba(221, 221, 221, 0.4);
    color: black;
  }
`;
const StyledImg = styled.img`
  width: 300px;
  height: 100px;
`;
const Contact = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  &:first-child {
    text-align: right;
  }
`;
const Position = styled.div`
  display: flex;
  padding-right: 50px;
  align-items: center;
`;
const NumberPhone = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;
`;
const Description = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  color: white;
  padding-bottom: 30px;
`;
const SocialMediaWrapper = styled.div`
  position: fixed;
  top: 200px;
  left: 0px;
`;

function Navigation(props) {
  const path = props.location.pathname.slice(1);
  const lowerHero = (() => path !== "")();
  console.log(lowerHero);

  return (
    <>
      <StyledNav lower={lowerHero}>
        <StyledImg src={logo} alt="logo" />
        <StyledLists>
          <StyledLi as={Link} to={routers.home}>
            STRONA GŁÓWNA
          </StyledLi>
          <StyledLi as={Link} to={routers.aboutUs}>
            O NAS
          </StyledLi>
          <StyledLi as={Link} to={routers.cottages}>
            DOMKI
          </StyledLi>
          <StyledLi as={Link} to={routers.rooms}>
            POKOJE
          </StyledLi>
          <StyledLi as={Link} to={routers.attractions}>
            ATRAKCJE
          </StyledLi>
          <StyledLi as={Link} to={routers.contact}>
            KONTAKT
          </StyledLi>
        </StyledLists>
        <Contact>
          <h3>REZERWACJA</h3>

          <Position>
            <MdPhone size={40} />
            <NumberPhone>
              <span>607 207 390</span>
              <span>601 071 840 </span>
            </NumberPhone>
          </Position>
        </Contact>

        <Description>
          {lowerHero ? (
            <>
              <Link to={routers.home}>Strona Główna</Link>
              <span>->{path}</span>
            </>
          ) : (
            <>
              <h2>Noclegi u Sokołów</h2>
              <h3>Pokoje oraz domki wakacyjne</h3>
              <Button>Zarezerwuj !</Button>
            </>
          )}
        </Description>

        <SocialMediaWrapper>
          <SocialMedia />
        </SocialMediaWrapper>
      </StyledNav>
    </>
  );
}
export default withRouter(Navigation);
