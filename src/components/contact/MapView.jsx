import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const MapView = () => {
  return (
    <MapContainer  className='absolute top-[20px] left-[700px]'style={{ width: "40%", height: "600px" }} center={[-34.599334641139336, -58.440014104266105]} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};
 