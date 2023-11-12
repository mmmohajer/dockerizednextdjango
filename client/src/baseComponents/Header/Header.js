import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import { lgDesignSize, smDesignSize } from '@/constants/vars';

import MobileHeader from './subs/Mobile/MobileHeader';
import DesktopHeader from './subs/Desktop/DesktopHeader';
import styles from './Header.module.scss';

const Header = ({
  hasStickyHeader,
  changesThePage = true,
  hasWavyShape,
  headerColorType,
  isAppPage
}) => {
  const scrollPosition = useSelector((state) => state.scrollPosition);

  return (
    <>
      {scrollPosition > 0 && hasStickyHeader ? (
        <Div
          type="flex"
          distributedBetween
          vAlign="center"
          className={cx(
            'w-per-100 pos-fix pos-fix--lt headerBgZIndex',
            styles.headerContainer,
            styles.headerContainerBlurryBg
          )}
        />
      ) : (
        ''
      )}
      <Div
        type="flex"
        distributedBetween
        vAlign={hasWavyShape ? 'start' : 'center'}
        className={cx(
          'w-per-100',
          hasStickyHeader && 'pos-fix pos-fix--lt headerZIndex',
          !isAppPage ? styles.headerContainer : 'hasHeaderHeight pl2 pr2',
          hasWavyShape && styles.headerContainerHasWavyShape,
          !hasWavyShape && headerColorType === 'light' && 'bgThemeOne',
          !hasWavyShape && headerColorType === 'dark' && 'bgThemeFour'
        )}>
        <Div
          type="flex"
          vAlign="center"
          distributedBetween
          showIn={smDesignSize}
          className="w-per-100">
          <MobileHeader
            changesThePage={changesThePage}
            headerColorType={headerColorType}
            isAppPage={isAppPage}
          />
        </Div>

        <Div
          type="flex"
          vAlign="center"
          distributedBetween
          showIn={lgDesignSize}
          className={cx(
            'w-per-100 ml-auto mr-auto',
            isAppPage ? 'maxContainerWidthForApp' : 'maxContainerWidth',
            hasWavyShape && 'height-px-60 pt4'
          )}>
          <DesktopHeader changesThePage={changesThePage} isAppPage={isAppPage} />
        </Div>
      </Div>
    </>
  );
};

export default Header;
