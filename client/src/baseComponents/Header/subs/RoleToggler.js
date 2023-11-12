import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import { setCurUserGroup } from '@/reducers/general/curUserGroup';
import { USER_GROUPS } from '@/constants/userGroups';

import styles from '../Header.module.scss';

const RollToggler = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const curUserGroup = useSelector((state) => state.curUserGroup);

  return (
    <>
      <Div type="flex" vAlign="center">
        <Div
          type="flex"
          vAlign="center"
          className="height-px-20 w-px-40 bgWhite br-rad-px-10 of-hidden mouse-hand pos-rel"
          onClick={() => {
            if (curUserGroup === USER_GROUPS.BUSINESS_ADMIN) {
              dispatch(setCurUserGroup(USER_GROUPS.BUSINESS_USER));
            }
            if (curUserGroup === USER_GROUPS.BUSINESS_USER) {
              dispatch(setCurUserGroup(USER_GROUPS.BUSINESS_ADMIN));
            }
            router.push('/app');
          }}>
          <Div
            className={cx(
              'height-px-20 bgThemeTwo w-px-20',
              styles.rollTogglerBtn,
              curUserGroup === USER_GROUPS.BUSINESS_ADMIN && styles.rollTogglerBtnIsLeft,
              curUserGroup === USER_GROUPS.BUSINESS_USER && styles.rollTogglerBtnIsRight
            )}></Div>
        </Div>
        <Div className="fs-px-12 ml1 textThemeFour w-px-100">
          {curUserGroup === USER_GROUPS.BUSINESS_ADMIN && 'Admin View'}
          {curUserGroup === USER_GROUPS.BUSINESS_USER && 'Employee View'}
        </Div>
      </Div>
    </>
  );
};

export default RollToggler;
