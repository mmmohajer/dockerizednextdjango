import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import styles from '../Table.module.scss';

const Search = React.forwardRef(
  ({ closable = true, iconColor = 'gray', className, containerClassName, ...props }, ref) => {
    const [activeSearch, setActiveSearch] = useState(false);

    useEffect(() => {
      if (!closable) {
        setActiveSearch(true);
      }
    }, [closable]);

    return (
      <>
        <Div className={cx('flex', activeSearch && 'ml1')}>
          <Div
            className={cx(
              'min-height-px-30 min-w-px-30 br-rad-px-50 bgWhite flex flex--jc--center flex--ai--center iswad_search_container',
              containerClassName
            )}>
            {closable ? (
              <Div onClick={() => setActiveSearch(!activeSearch)} className="mouse-hand">
                <Icon type="search" scale={0.8} color="gray" />
              </Div>
            ) : (
              <Div className="mouse-hand">
                <Icon
                  type="search"
                  scale={0.8}
                  color="gray"
                  className={cx(closable && 'mouse-hand')}
                />
              </Div>
            )}
            <input
              type="search"
              className={cx(
                'iswad_search_input',
                activeSearch && 'iswad_search_input_active',
                className
              )}
              {...props}
            />
          </Div>
        </Div>
      </>
    );
  }
);

export default Search;
