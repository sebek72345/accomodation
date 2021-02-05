import React, { useState } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Reserve from "./components/Reserve/Reserve";
import Footer from "./components/Footer/Footer";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";
import Cottage from "./pages/Cottage";
import Rooms from "./pages/Rooms";
import MainPage from "./pages/MainPage";
import Modal from "./components/Modal/Modal";
import routers from "./routers";
function App() {
  const [openModal, handleOpenModal] = useState(false);
  const toggleModal = () => {
    handleOpenModal(!openModal);
    console.log("click");
  };
  return (
    <HashRouter>
      <Navigation toggleModal={toggleModal} />
      {openModal && <Modal toggleModal={toggleModal} />}
      <Switch>
        <Route path={routers.home} exact component={MainPage} />
        <Route path={routers.cottages} component={Cottage} />
        <Route path={routers.rooms} component={Rooms} />
        <Route path={routers.attractions} component={Attractions} />
        <Route path={routers.contact} component={Contact} />
      </Switch>
      <Reserve />
      <Footer />
    </HashRouter>
  );
}

export default App;
