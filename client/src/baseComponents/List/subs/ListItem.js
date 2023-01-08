import React from 'react';
import cx from 'classnames';
import { Div, Paragraph } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from '../List.module.scss';

const ListItem = ({ item, ...props }) => {
  return (
    <>
      <Div type="flex" vAlign="start" className="mb1" {...props}>
        <Div>
          <Div className="w-px-20 height-px-20 br-rad-per-50 bgThemeThree boxShadowType1 pos-rel">
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className="w-px-20 height-px-20 pos-abs pos-abs--lt">
              <Icon type="check-mark" color={'yellow'} scale={0.7} />
            </Div>
          </Div>
        </Div>
        <Div className="ml1">
          <Paragraph className={cx(styles.paragraph)}>{item}</Paragraph>
        </Div>
      </Div>
    </>
  );
};

export default ListItem;
