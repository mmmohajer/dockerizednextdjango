import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from '../List.module.scss';

const ListItem2 = ({ item, ...props }) => {
  return (
    <>
      <Div type="flex" vAlign="start" className={cx('mb8', styles.item2Container)} {...props}>
        <Div>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="w-px-70 height-px-70 br-rad-per-50 bgThemeThree boxShadowType1 pos-rel textWhite f-b fs-r-3 mb2">
            {item.number}
          </Div>
        </Div>
        <Div className="ml2 max-w-px-500">
          <Div className="textWhite f-b text-title mb1 fs-px-26">{item.title}</Div>
          <Div className="fs-px-16 pr8">{item.details}</Div>
        </Div>
      </Div>
    </>
  );
};

export default ListItem2;
