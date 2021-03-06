import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./Map.css";
const style = {
  height: "400px",
  position: "static",
};
class Maps extends React.Component {
  render() {
    return (
      <div id="mapBox">
        <Map
          mapType="hibrid"
          style={style}
          className="map"
          mapTypeControl={true}
          google={this.props.google}
          zoom={12}
          scaleControl={false}
          initialCenter={{ lat: 49.328, lng: 22.475 }}
        >
          <Marker
            position={{ lat: 49.303485, lng: 22.400117 }}
            name={"My location"}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCz-7XWD1AMvY1LwbjbJuIfKMIEWPvaLGk",
})(Maps);
