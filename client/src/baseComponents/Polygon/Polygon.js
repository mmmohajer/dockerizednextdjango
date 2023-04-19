import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './Polygon.module.scss';

const Polygon = ({ type, fill, gradFillType = 1, width = 80, height = 40, text }) => {
  const [filledColor, setFilledColor] = useState('');

  useEffect(() => {
    if (fill) {
      setFilledColor(fill);
    } else {
      setFilledColor(`url(#polygon-grad-${gradFillType})`);
    }
  }, [fill, gradFillType]);
  return (
    <>
      {type === 'service-card-head' && (
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="of-hidden pos-rel"
          style={{ width, height }}>
          <svg height={height} width={width}>
            <defs>
              <radialGradient id="polygon-grad-1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: 'rgb(44, 116, 179)', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(44, 116, 179)', stopOpacity: 0.8 }} />
              </radialGradient>

              <radialGradient id="polygon-grad-2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: 'rgb(255, 99, 0)', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(255, 99, 0)', stopOpacity: 0.8 }} />
              </radialGradient>
            </defs>
            <polygon
              points={`0,0 0,${height} ${width},${height} ${0.75 * width},${
                0.5 * height
              } ${width},0`}
              fill={filledColor}
            />
          </svg>
          {text && <Div className="pos-abs pos-abs--center f-b fs-px-20">{text}</Div>}
        </Div>
      )}

      {type === 'service-card-tail-left' && (
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="of-hidden pos-rel"
          style={{ width, height }}>
          <svg height={height} width={width}>
            <defs>
              <radialGradient id="polygon-grad-1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: 'rgb(44, 116, 179)', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(44, 116, 179)', stopOpacity: 0.8 }} />
              </radialGradient>

              <radialGradient id="polygon-grad-2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: 'rgb(255, 99, 0)', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(255, 99, 0)', stopOpacity: 0.8 }} />
              </radialGradient>
            </defs>
            <polygon
              points={`0,0 ${width},0 ${width},${0.5 * height} 0,${height}`}
              fill={filledColor}
            />
          </svg>
        </Div>
      )}

      {type === 'service-card-tail-right' && (
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="of-hidden pos-rel"
          style={{ width, height }}>
          <svg height={height} width={width}>
            <defs>
              <radialGradient id="polygon-grad-1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: 'rgb(44, 116, 179)', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(44, 116, 179)', stopOpacity: 0.8 }} />
              </radialGradient>

              <radialGradient id="polygon-grad-2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: 'rgb(255, 99, 0)', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(255, 99, 0)', stopOpacity: 0.8 }} />
              </radialGradient>
            </defs>
            <polygon
              points={`0,0 ${width},0 ${width},${height} 0,${0.5 * height}`}
              fill={filledColor}
            />
          </svg>
        </Div>
      )}
    </>
  );
};

export default Polygon;
