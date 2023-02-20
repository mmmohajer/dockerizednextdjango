import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div } from 'basedesign-iswad';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';

import UserManager from '../UserManager';
import DesktopNav from './DesktopNav';
import styles from '../../Header.module.scss';

const DesktopHeader = ({ changesThePage }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const mobileNavIsActive = useSelector((state) => state.mobileNavIsActive);
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <Div type="flex" vAlign="center">
        <Div
          className="mouse-hand"
          onClick={() => {
            dispatch(setActiveMenu('/home'));
            dispatch(setActiveSubMenu(''));
            if (changesThePage) {
              router.push('/');
            } else {
              window.scrollTo(0, 0);
            }
          }}>
          <Div className="textWhite">Logo</Div>
        </Div>
        <Div className="ml4">
          <DesktopNav changesThePage={changesThePage} />
        </Div>
      </Div>
      <Div>
        <UserManager />
      </Div>
    </>
  );
};

export default DesktopHeader;
