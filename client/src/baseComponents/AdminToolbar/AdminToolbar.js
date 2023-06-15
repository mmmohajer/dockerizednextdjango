import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import Router from 'next/router';

import Icon from '@/baseComponents/Icon';

import { COLORS } from '@/constants/vars';

import { ROUTES } from './constants';
import GuideLines from './subs/GuideLines';
import styles from './AdminToolbar.module.scss';

const AdminToolbar = () => {
  const [showToolBar, setShowToolBar] = useState(false);
  const [showGuideLine, setShowGuideLine] = useState(false);
  const [verticalGridSpacing, setVerticalGridSpacing] = useState(0);

  return (
    <>
      <Div type="flex" direction="vertical" hAlign="end" className="pos-fix pos-fix--rt z-10">
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="w-px-40 height-px-40 br-rad-per-50 mr2 mt2 bgGrayDark mouse-hand"
          onClick={() => setShowToolBar(!showToolBar)}>
          <Icon type="person-fill" scale={1.5} color="white" />
        </Div>

        {showToolBar && (
          <Div
            type="flex"
            direction="vertical"
            hAlign="center"
            className="min-w-px-100 pt1 max-w-px-300 br-rad-px-5 bgWhite boxShadowType1 mr2">
            {ROUTES?.map((item, idx) => (
              <Div
                key={idx}
                onClick={() => Router.push(item.url)}
                className="fs-px-12 mb1 height-px-30 w-px-30 mouse-hand"
                type="flex"
                hAlign="center"
                vAlign="center">
                <Icon type={item.icon} scale={1.5} />
              </Div>
            ))}
            <Div
              className="fs-px-12 mb1 height-px-30 w-px-30 mouse-hand"
              type="flex"
              hAlign="center"
              vAlign="center"
              onClick={() => setShowGuideLine(!showGuideLine)}>
              <Icon type="grid" scale={1.5} color={showGuideLine ? 'black' : COLORS.grayDark} />
            </Div>
          </Div>
        )}
      </Div>
      {showGuideLine && (
        <GuideLines
          verticalGridSpacing={verticalGridSpacing}
          setVerticalGridSpacing={setVerticalGridSpacing}
        />
      )}
    </>
  );
};

export default AdminToolbar;
