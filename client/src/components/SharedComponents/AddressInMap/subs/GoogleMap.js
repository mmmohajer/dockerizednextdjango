import React from 'react';
import GoogleMapReact from 'google-map-react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { GOOGLE_MAP_API_KEY } from 'config';

import styles from '../AddressInMap.module.scss';

const GoogleMap = ({ address }) => {
  const renderMarkers = (map, maps) => {
    if (!maps) return;
    const geocoder = new maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        const { lat, lng } = results[0].geometry.location;

        new maps.Marker({
          position: { lat: lat(), lng: lng() },
          map
        });
        const infowindow = new maps.InfoWindow({
          content: `<div style="font-weight: bold; padding: 1rem;">${address}</div>`,
          position: results[0].geometry.location
        });
        infowindow.open(map);
        map.setCenter(results[0].geometry.location);
      }
    });
  };

  return (
    <>
      <Div className="w-per-100 height-px-500">
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        />
      </Div>
    </>
  );
};

export default GoogleMap;
