import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import MapBox from './subs/MapBox';
// import GoogleMap from './subs/GoogleMap';
import styles from './AddressInMap.module.scss';

const AddressInMap = ({ provider = 'mapBox', address }) => {
  return (
    <>
      {provider === 'mapBox' && <MapBox address={address} />}
      {/* {provider === 'googleMap' && <GoogleMap address={address} />} */}
    </>
  );
};

export default AddressInMap;
