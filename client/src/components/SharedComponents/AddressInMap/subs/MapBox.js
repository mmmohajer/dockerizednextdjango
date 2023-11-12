import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import cx from 'classnames';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Div } from 'basedesign-iswad';

import { MAP_BOX_ACCESS_TOKEN } from 'config';

import styles from '../AddressInMap.module.scss';

const MapBox = ({ address }) => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (address) {
      mapboxgl.accessToken = MAP_BOX_ACCESS_TOKEN;

      map.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11', // Replace with your desired map style
        center: [0, 0], // Initial center of the map
        zoom: 12 // Initial zoom level of the map
        // preserveDrawingBuffer: true,
        // scrollZoom: false
      });

      const geocodeAddress = async (address) => {
        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
              address
            )}.json?access_token=${mapboxgl.accessToken}`
          );
          if (!response.ok) {
            throw new Error('Geocoding failed');
          }
          const data = await response.json();
          const coordinates = data.features[0].geometry.coordinates;
          map.current.setCenter(coordinates);
          const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map.current);
          const addressLabel = new mapboxgl.Popup({ offset: 25 }).setText(address);
          marker.setPopup(addressLabel);
          marker.togglePopup();
        } catch (error) {
          console.error(error);
        }
      };

      geocodeAddress(address);

      // Clean up
      return () => {
        map.current.remove();
      };
    }
  }, [address]);

  // useEffect(() => {
  //   if (address) {
  //     setTimeout(() => {
  //       window?.scrollTo(0, 0);
  //     }, 100);
  //   }
  // }, [address]);

  return (
    <>
      <Div ref={mapContainerRef} className="w-per-100 height-px-300" />
    </>
  );
};

export default MapBox;
