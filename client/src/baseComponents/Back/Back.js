import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';
import { removeLastVistitedRoute } from '@/reducers/general/visitedRoutes';

import styles from './Back.module.scss';

const Back = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const visitedRoutes = useSelector((state) => state.visitedRoutes);

  const [btnClicked, setBtnClicked] = useState(false);

  useEffect(() => {
    if (router.asPath && visitedRoutes?.length >= 1 && btnClicked) {
      if (visitedRoutes[visitedRoutes.length - 1] !== router.asPath) {
        router.push(visitedRoutes[visitedRoutes.length - 1]);
        setTimeout(() => {
          setBtnClicked(false);
        }, 10);
      } else {
        dispatch(removeLastVistitedRoute());
      }
    }
  }, [visitedRoutes, router, btnClicked]);

  return (
    <>
      {visitedRoutes?.length > 1 ? (
        <Div
          type="flex"
          vAlign="center"
          className="mouse-hand"
          onClick={() => {
            setBtnClicked(true);
          }}>
          <Div type="flex" hAlign="center" vAlign="center" className="w-px-30">
            <Icon type="arrow-left" color={COLORS.themeOne} scale={1} />
          </Div>
          <Div className="textThemeOne">Back</Div>
        </Div>
      ) : (
        ''
      )}
    </>
  );
};

export default Back;
