import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Paragraph from '@/baseComponents/Paragraph';

import styles from '../DevDesign.module.scss';

function DisplayParagraph() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        <Paragraph className={'max-w-px-500 ml-auto mr-auto mb1'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Paragraph>
      </Div>
    </>
  );
}

export default DisplayParagraph;
