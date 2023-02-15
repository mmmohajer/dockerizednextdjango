import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { APIS } from './constants';
import Item from './subs/Item';
import styles from './ApiDoc.module.scss';

const ApiDoc = () => {
  return (
    <>
      <Div className="p2">
        {APIS?.map((api, idx) => (
          <Div key={idx} className="mb2">
            {api?.map((item, subIdx) => (
              <Div key={subIdx}>
                <Item category={item?.category} endpoints={item?.endpoints} />
              </Div>
            ))}
          </Div>
        ))}
      </Div>
    </>
  );
};

export default ApiDoc;
