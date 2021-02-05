import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import routers from "../../routers";
import "./Modal.css";
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: black;
  z-index: 20;
  color: white;
`;
export default function Modal({ toggleModal }) {
  return (
    <div className="modalWrapper">
      <div className="closeModal" onClick={toggleModal}>
        X
      </div>
      <ul className="listOfNav" onClick={toggleModal}>
        <NavLink
          className="item"
          to={routers.home}
          exact
          activeClassName="path"
        >
          Strona Główna
        </NavLink>
        <NavLink className="item" to={routers.cottages} activeClassName="path">
          Domki
        </NavLink>
        <NavLink className="item" to={routers.rooms} activeClassName="path">
          Pokoje
        </NavLink>
        <NavLink
          className="item"
          to={routers.attractions}
          activeClassName="path"
        >
          Atrakcje
        </NavLink>
        <NavLink className="item" to={routers.contact} activeClassName="path">
          Kontakt
        </NavLink>
      </ul>
      <div className="contact">
        <h5>REZERWACJA</h5>
        <div className="number">607 207 390</div>
      </div>
    </div>
  );
}
