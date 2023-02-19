import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import HeightTransitionEffect from '@/baseComponents/HeightTransitionEffect';

import InfoModal from './InfoModal';
import styles from '../ApiDoc.module.scss';

const Item = ({ category, endpoints, info, setInfoModalContext }) => {
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
          type="flex"
          distributedBetween
          vAlign="center"
          className={cx('p2 bgBlue textWhite mouse-hand f-b text-title')}
          onClick={() => setCategoryIsActive(!categoryIsActive)}>
          <Div>{category}</Div>
          {info && (
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className={'mouse-hand z-10 w-px-30 height-px-30'}
              onClick={() => setInfoModalContext(info)}>
              <Icon type="question-circle" color="white" scale={1.5} />
            </Div>
          )}
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
                    'flex--wrap text-title',
                    styles[`item${item?.method?.toUpperCase()}Container`]
                  )}>
                  <Div className="f-b">{item?.title}</Div>
                </Div>
                <HeightTransitionEffect isActive={activeSubItems[idx]} className="">
                  <Div className="my2 br-bottom-solid-3 br-top-solid-3 py2">
                    <span className="f-b mr2">Method</span> {item?.method}
                  </Div>
                  <Div className="mb2 br-bottom-solid-3 py2">
                    <span className="f-b mr2">URL</span> {item?.url}
                  </Div>

                  <Div className="mb2 br-bottom-solid-3 py2">
                    <span className="f-b mr2">Authorized Groups</span>{' '}
                    {JSON.stringify(item?.authorizedGroups, null, 2)}
                  </Div>
                  {item?.headerParams?.length >= 1 && (
                    <Div className={'br-bottom-solid-3'}>
                      <Div className="my2 f-b">Header Params</Div>
                      <Div className="ml2">
                        {item?.headerParams?.map((param, idx) => (
                          <Div key={idx} className="mb2">
                            <Div>
                              <span className={cx('f-b', param?.isRequired && 'required')}>
                                {param?.name}
                              </span>
                              <span className="ml2">{`<${param?.type}>`}</span>
                            </Div>
                            <Div className="mt1 ml2 fs-px-14">{param?.description}</Div>
                          </Div>
                        ))}
                      </Div>
                    </Div>
                  )}

                  {item?.bodyParams?.length >= 1 && (
                    <Div className={'br-bottom-solid-3'}>
                      <Div className="my2 f-b">Body Params</Div>
                      <Div className="ml2">
                        {item?.bodyParams?.map((param, idx) => (
                          <Div key={idx} className="mb2">
                            <Div>
                              <span className={cx('f-b', param?.isRequired && 'required')}>
                                {param?.name}
                              </span>
                              <span className="ml2">{`<${param?.type}>`}</span>
                            </Div>
                            <Div className="mt1 ml2 fs-px-14">{param?.description}</Div>
                          </Div>
                        ))}
                      </Div>
                    </Div>
                  )}

                  {item?.queryParams?.length >= 1 && (
                    <Div className={'br-bottom-solid-3'}>
                      <Div className="my2 f-b">Query Params</Div>
                      <Div className="ml2">
                        {item?.queryParams?.map((param, idx) => (
                          <Div key={idx} className="mb2">
                            <Div>
                              <span className={cx('f-b', param?.isRequired && 'required')}>
                                {param?.name}
                              </span>
                              <span className="ml2">{`<${param?.type}>`}</span>
                            </Div>
                            <Div className="mt1 ml2 fs-px-14">{param?.description}</Div>
                          </Div>
                        ))}
                      </Div>
                    </Div>
                  )}
                  {item?.description && (
                    <Div className={'br-bottom-solid-3 pb2'}>
                      <Div className="my2 f-b">Description</Div>
                      <Div className="ml2">{item?.description}</Div>
                    </Div>
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
                        <Div className="my2">{response?.description}</Div>
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
