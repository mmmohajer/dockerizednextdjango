import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Row, Column } from 'basedesign-iswad';

import Slider from '@/baseComponents/Slider';

import styles from '../AdminToolbar.module.scss';

const ARRAY_OF_LINES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const VLINES_MULTIPLIER = 0.2;

const GuideLines = ({ verticalGridSpacing, setVerticalGridSpacing }) => {
  const [numberOfVLines, setNumberOfVLines] = useState(50);
  const [arrayOfVerticalLines, setArrayOfVerticalLines] = useState([1, 2, 3, 4, 5]);
  const [verticalLinesMargin, setVerticalLinesMargin] = useState(0);

  useEffect(() => {
    const localArrayOfLines = [];
    let num = 1;
    while (num <= numberOfVLines * VLINES_MULTIPLIER) {
      localArrayOfLines.push(num);
      num += 1;
    }
    setArrayOfVerticalLines(localArrayOfLines);
  }, [numberOfVLines]);

  return (
    <>
      <Div className="w-per-100 pos-fix pos-fix--lt w-per-100 height-vh-full">
        <Row>
          {ARRAY_OF_LINES?.map((item, idx) => (
            <Column key={idx} xs={1} sm={1} md={1} lg={1}>
              <Div
                className={cx(
                  'w-per-100 br-right-solid-4 height-vh-full',
                  idx === 0 && 'br-left-solid-4',
                  idx === 5 ? 'br-color-red' : 'br-color-black'
                )}>
                <Div className="" style={{ marginTop: verticalLinesMargin }}>
                  {verticalGridSpacing > 0 &&
                    arrayOfVerticalLines?.map((item, subIdx) => (
                      <Div
                        key={subIdx}
                        className={cx(
                          'w-per-100 br-bottom-solid-4 br-color-yellow',
                          subIdx === 0 && 'br-top-solid-4'
                        )}
                        style={{ height: verticalGridSpacing }}
                      />
                    ))}
                </Div>
              </Div>
            </Column>
          ))}
        </Row>
      </Div>
      <Div className="pos-fix w-px-60 py1 bgWhite" style={{ top: '55px', right: '120px' }}>
        <Slider sliderVal={verticalGridSpacing} setSliderVal={setVerticalGridSpacing} />
      </Div>
      <Div className="pos-fix w-px-60 py1 bgWhite" style={{ top: '55px', right: '190px' }}>
        <Slider sliderVal={verticalLinesMargin} setSliderVal={setVerticalLinesMargin} />
      </Div>
      <Div className="pos-fix w-px-60 py1 bgWhite" style={{ top: '55px', right: '260px' }}>
        <Slider
          sliderVal={numberOfVLines}
          setSliderVal={setNumberOfVLines}
          multiplier={VLINES_MULTIPLIER}
        />
      </Div>
    </>
  );
};

export default GuideLines;
