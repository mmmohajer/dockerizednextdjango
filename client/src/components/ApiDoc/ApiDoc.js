import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { APIS } from './constants';
import Item from './subs/Item';
import InfoModal from './subs/InfoModal';
import styles from './ApiDoc.module.scss';

const ApiDoc = () => {
  const [infoModalContext, setInfoModalContext] = useState('');

  return (
    <>
      <Div className="p2">
        {APIS?.map((api, idx) => (
          <Div key={idx} className="mb2">
            {api?.map((item, subIdx) => (
              <Div key={subIdx}>
                <Item
                  category={item?.category}
                  endpoints={item?.endpoints}
                  info={item?.info || ''}
                  setInfoModalContext={setInfoModalContext}
                />
              </Div>
            ))}
          </Div>
        ))}
      </Div>

      {infoModalContext && (
        <InfoModal categoryInfo={infoModalContext} setInfoModalContext={setInfoModalContext} />
      )}
    </>
  );
};

export default ApiDoc;
