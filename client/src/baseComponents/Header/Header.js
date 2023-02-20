import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { lgDesignSize, smDesignSize } from '@/constants/vars';

import MobileHeader from './subs/Mobile/MobileHeader';
import DesktopHeader from './subs/Desktop/DesktopHeader';
import styles from './Header.module.scss';

const Header = ({ hasStickyHeader, changesThePage = true }) => {
  return (
    <>
      <Div
        type="flex"
        distributedBetween
        vAlign="center"
        className={cx(
          'w-per-100 bgThemeOne',
          hasStickyHeader && 'pos-fix pos-fix--lt headerZIndex',
          styles.headerContainer
        )}>
        <Div
          type="flex"
          vAlign="center"
          distributedBetween
          showIn={smDesignSize}
          className="w-per-100 px2">
          <MobileHeader changesThePage={changesThePage} />
        </Div>

        <Div
          type="flex"
          vAlign="center"
          distributedBetween
          showIn={lgDesignSize}
          className="w-per-100 px2">
          <DesktopHeader changesThePage={changesThePage} />
        </Div>
      </Div>
    </>
  );
};

export default Header;
