import React, { Component, useEffect, useRef } from "react";

/*
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class LeafletContainer extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} style={{height: "400px", width: "100%"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}
*/

import L from "leaflet";
import "./style.css"

function LeafletContainer({ markerPositionStart, markerPositionEnd }) {
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map('map', {
      center: [47.6062, -122.3321],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }, []);

  let layerRefBounds = [];

  // add start marker
  const markerStartRef = useRef(null);
  useEffect(
    () => {
      if (markerStartRef.current) {
        markerStartRef.current.setLatLng(markerPositionStart);
      } else {
        markerStartRef.current = L.marker(markerPositionStart).addTo(mapRef.current);
      }

      layerRefBounds.push([markerPositionStart.lat, markerPositionStart.lng]);
    },
    [markerPositionStart]
  );

  // add end marker
  const markerEndRef = useRef(null);
  useEffect(
    () => {
      if (markerEndRef.current) {
        markerEndRef.current.setLatLng(markerPositionEnd);
      } else {
        markerEndRef.current = L.marker(markerPositionEnd).addTo(mapRef.current);
      }

      layerRefBounds.push([markerPositionEnd.lat, markerPositionEnd.lng]);

      mapRef.current.fitBounds(layerRefBounds);
    },
    [markerPositionEnd]
  );

  // // add layer
  // const layerRef = useRef(null);
  // useEffect(() => {
  //   layerRef.current = L.layerGroup().addTo(mapRef.current);
  // }, []);

  // // update markers
  // useEffect(
  //   () => {
  //     let layerRefBounds = [];
  //     layerRef.current.clearLayers();
  //     markersData.forEach(marker => {
  //       layerRefBounds.push([marker.latLng.lat, marker.latLng.lng]);
  //       L.marker(marker.latLng, { title: marker.title }).addTo(
  //         layerRef.current
  //       );
  //     });

  //     mapRef.current.fitBounds(layerRefBounds);
  //   },
  //   [markersData]

    
  // );

  

  return <div id="map"></div>
}

export default LeafletContainer;
