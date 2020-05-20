import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Reserve from "./components/Reserve/Reserve";
import Footer from "./components/Footer/Footer";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import AboutUs from "./pages/AboutUs";
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";
import Cottage from "./pages/Cottage";
import Rooms from "./pages/Rooms";
import MainPage from "./pages/MainPage";
import routers from "./routers";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path={routers.home} exact component={MainPage} />
        <Route path={routers.aboutUs} component={AboutUs} />
        <Route path={routers.cottages} component={Cottage} />
        <Route path={routers.rooms} component={Rooms} />
        <Route path={routers.attractions} component={Attractions} />
        <Route path={routers.contact} component={Contact} />
      </Switch>
      <Reserve />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
