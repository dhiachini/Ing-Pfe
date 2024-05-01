import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5vaXJtYXAiLCJhIjoiY2xybnQzeGRiMDI2dDJqbnhtcng4NWk2ayJ9.gpX-sPWKgk03UjvmPzIW_A';

function Map({ setLatInput, setLngInput }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [lng, setLng] = useState(9.5375); // Center longitude for Tunisia
  const [lat, setLat] = useState(33.8869); // Center latitude for Tunisia
  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat], // Set initial center to Tunisia
      zoom: zoom
    });

    marker.current = new mapboxgl.Marker();

    map.current.on('click', (e) => {
      const { lngLat } = e;
      const clickedLng = lngLat.lng;
      const clickedLat = lngLat.lat;

      setLng(clickedLng);
      setLat(clickedLat);
      setLngInput(clickedLng);
      setLatInput(clickedLat);

      marker.current.setLngLat([clickedLng, clickedLat]);
      marker.current.addTo(map.current);
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} style={{ height: "400px" }} />
    </div>
  );
}

export default Map;
