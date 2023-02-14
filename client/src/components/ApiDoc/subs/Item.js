import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import HeightTransitionEffect from '@/baseComponents/HeightTransitionEffect';

import styles from '../ApiDoc.module.scss';

const Item = ({ category, endpoints }) => {
  const [categoryIsActive, setCategoryIsActive] = useState(false);
  const [activeSubItems, setActiveSubItems] = useState({});

  useEffect(() => {
    let idx = 0;
    const localActiveSubItems = { ...activeSubItems };
    endpoints?.forEach((item) => {
      localActiveSubItems[idx] = false;
      idx += 1;
    });
    setActiveSubItems(localActiveSubItems);
  }, [endpoints]);

  return (
    <>
      <Div className={cx('w-per-100 textBlack', styles.itemContainer)}>
        <Div
          className={cx('p2 bgBlue textWhite mouse-hand f-b')}
          onClick={() => setCategoryIsActive(!categoryIsActive)}>
          {category}
        </Div>
        <HeightTransitionEffect isActive={categoryIsActive}>
          <Div>
            {endpoints?.map((item, idx) => (
              <Div
                key={idx}
                className={cx(
                  'p2 m2 br-rad-px-10 mouse-hand',
                  styles[`item${item?.method?.toUpperCase()}CategoryContainer`]
                )}
                onClick={() => {
                  const localActiveSubItems = { ...activeSubItems };
                  localActiveSubItems[idx] = !localActiveSubItems[idx];
                  setActiveSubItems(localActiveSubItems);
                }}>
                <Div
                  type="flex"
                  distributedBetween
                  vAlign="center"
                  className={cx(
                    'flex--wrap',
                    styles[`item${item?.method?.toUpperCase()}Container`]
                  )}>
                  <Div
                    type="flex"
                    hAlign="start"
                    vAlign="center"
                    className={cx(
                      'height-px-40 w-px-100 br-rad-px-10 text-uppercase',
                      styles[`item${item?.method?.toUpperCase()}Btn`]
                    )}>
                    {item?.method}
                  </Div>
                  <Div>{item?.url}</Div>
                  <Div>Authorized Groups: {JSON.stringify(item?.authorizedGroups, null, 2)}</Div>
                </Div>
                <HeightTransitionEffect isActive={activeSubItems[idx]}>
                  {item?.bodyParams?.length >= 1 && (
                    <>
                      <Div className="my2 f-b">Body Params</Div>
                      <Div className="ml2">
                        {item?.bodyParams?.map((param, idx) => (
                          <Div key={idx} className="mb2">
                            <Div>
                              <span className={cx('f-b', param?.isRequired && 'required')}>
                                {param?.name}
                              </span>
                              <span className="ml2">{`<${param?.type}>`}</span>
                              <span className="ml2 fs-px-14">{param?.description}</span>
                            </Div>
                          </Div>
                        ))}
                      </Div>
                    </>
                  )}

                  {item?.queryParams?.length >= 1 && (
                    <>
                      <Div className="my2 f-b">Query Params</Div>
                      <Div className="ml2">
                        {item?.queryParams?.map((param, idx) => (
                          <Div key={idx} className="mb2">
                            <Div>
                              <span className={cx('f-b', param?.isRequired && 'required')}>
                                {param?.name}
                              </span>
                              <span className="ml2">{`<${param?.type}>`}</span>
                              <span className="ml2 fs-px-14">{param?.description}</span>
                            </Div>
                          </Div>
                        ))}
                      </Div>
                    </>
                  )}
                  {item?.description && (
                    <>
                      <Div className="my2 f-b">Description</Div>
                      <Div className="ml2">{item?.description}</Div>
                    </>
                  )}
                  <Div className="my2 f-b">Responses</Div>
                  {item?.responses?.map((response, idx) => (
                    <Div
                      key={idx}
                      className={cx(
                        'mb4 p2',
                        response?.type?.toUpperCase() === 'SUCCESS'
                          ? styles.itemResponseSuccessContainer
                          : styles.itemResponseErrorContainer
                      )}>
                      <Div className="mb2">Type: {response?.type}</Div>
                      <Div className="mb2">Code: {response?.code}</Div>
                      <Div>
                        <Div className="mb2">Response Sample:</Div>
                        <pre>{JSON.stringify(response?.ex || {}, null, 2)}</pre>
                      </Div>
                    </Div>
                  ))}
                </HeightTransitionEffect>
              </Div>
            ))}
          </Div>
        </HeightTransitionEffect>
      </Div>
    </>
  );
};

export default Item;
