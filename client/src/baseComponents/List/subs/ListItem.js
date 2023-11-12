import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import styles from '../List.module.scss';

const ListItem = ({ item, isIconWhite, ...props }) => {
  return (
    <>
      <Div type="flex" vAlign="center" className="mb1" {...props}>
        <Div>
          <Div
            className={cx(
              'w-px-20 height-px-20 br-rad-per-50 boxShadowType1 pos-rel',
              isIconWhite ? 'bgThemeOne' : styles.type1CheckContainer
            )}>
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className="w-px-20 height-px-20 pos-abs pos-abs--lt">
              <Icon type="check-mark" color={isIconWhite ? 'white' : COLORS.themeOne} scale={0.9} />
            </Div>
          </Div>
        </Div>
        <Div className="ml1">
          <Div className={'fs-px-12'}>{item}</Div>
        </Div>
      </Div>
    </>
  );
};

export default ListItem;
