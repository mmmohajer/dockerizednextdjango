import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Heading, Row, Column } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';
import Anchor from '@/baseComponents/Anchor';

import { LINKS } from '../constants';
import styles from '../Footer.module.scss';

const LinksSection = ({ footerIsColored }) => {
  const [links, setLinks] = useState({ 1: [], 2: [], 3: [] });

  useEffect(() => {
    const localLinks = { 1: [], 2: [], 3: [] };
    LINKS?.forEach((item) => {
      localLinks[item.rowNumber]?.push(item);
    });
    setLinks(localLinks);
  }, [LINKS]);

  return (
    <>
      <Row className="w-per-100">
        <Column xs={4} sm={4} md={4} lg={4}>
          <Div type="flex" hAlign="start" className="w-per-100">
            <Div>
              {links?.[1]?.map((item, idx) => (
                <Div key={idx} className="mb1">
                  <Anchor anchorType={footerIsColored ? 4 : 3} to={item.url}>
                    {item.title}
                  </Anchor>
                </Div>
              ))}
            </Div>
          </Div>
        </Column>
        <Column xs={4} sm={4} md={4} lg={4}>
          <Div type="flex" hAlign="center" className="w-per-100 px4">
            <Div>
              {links?.[2]?.map((item, idx) => (
                <Div key={idx} className="mb1">
                  <Anchor anchorType={footerIsColored ? 4 : 3} to={item.url}>
                    {item.title}
                  </Anchor>
                </Div>
              ))}
            </Div>
          </Div>
        </Column>
        <Column xs={4} sm={4} md={4} lg={4}>
          <Div type="flex" hAlign="end" className="w-per-100">
            <Div>
              {links?.[3]?.map((item, idx) => (
                <Div key={idx} className="mb1">
                  <Anchor anchorType={footerIsColored ? 4 : 3} to={item.url}>
                    {item.title}
                  </Anchor>
                </Div>
              ))}
            </Div>
          </Div>
        </Column>
      </Row>
    </>
  );
};

export default LinksSection;
