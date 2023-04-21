import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import DisplayHeadings from './subs/DisplayHeadings';
import DisplayColors from './subs/DisplayColors';
import DisplayIcons from './subs/DisplayIcons';
import DisplayAnchor from './subs/DisplayAnchor';
import DisplayButtons from './subs/DisplayButtons';
import DisplayForm from './subs/DisplayForm';
import DisplayAlert from './subs/DisplayAlert';
import DisplayModals from './subs/DisplayModals';
import DisplayLoading from './subs/DisplayLoading';
import DisplayCards from './subs/DisplayCards';
import DisplayPagination from './subs/DisplayPagination';
import DisplayTable from './subs/DisplayTable';
import DisplayText from './subs/DisplayText';
import DisplayParagraph from './subs/DisplayParagraph';
import DisplayDraggableFileUploader from './subs/DisplayDraggableFileUploader';
import DisplayChart from './subs/DisplayChart';
import DisplayList from './subs/DisplayList';
import DisplayEmailTemplates from './subs/DisplayEmailTemplates';
import DisplayAnimationOnScroll from './subs/DisplayAnimationOnScroll';
import DisplayResponsiveSwipeableSlider from './subs/DisplayResponsiveSwipeableSlider';
import DisplayUserEvent from './subs/DisplayUserEvent';
import DisplayPolygon from './subs/DisplayPolygon';
import DisplayLimitedSwipeableSlider from './subs/DisplayLimitedSwipeableSlider';

import DevSection from './subs/DevSection';
import styles from './DevDesign.module.scss';

const DevDesign = () => {
  const [activeElements, setActiveElements] = useState('');

  return (
    <>
      <DevSection
        title="Alerts"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayAlert />
      </DevSection>

      <DevSection
        title="Anchors"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayAnchor />
      </DevSection>

      <DevSection
        title="Buttons"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayButtons />
      </DevSection>

      <DevSection
        title="Cards"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayCards />
      </DevSection>

      <DevSection
        title="Charts"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayChart />
      </DevSection>

      <DevSection
        title="Colors"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayColors />
      </DevSection>

      <DevSection
        title="Draggable File Uploader"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayDraggableFileUploader />
      </DevSection>

      <DevSection
        title="Email Templates"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayEmailTemplates />
      </DevSection>

      <DevSection
        title="Form Components"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayForm />
      </DevSection>

      <DevSection
        title="Headings"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayHeadings />
      </DevSection>

      <DevSection
        title="Icons"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayIcons />
      </DevSection>

      <DevSection
        title="List"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayList />
      </DevSection>

      <DevSection
        title="Loadings"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayLoading />
      </DevSection>

      <DevSection
        title="Modals"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayModals />
      </DevSection>

      <DevSection
        title="Pagination"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayPagination />
      </DevSection>

      <DevSection
        title="Paragraphs"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayParagraph />
      </DevSection>

      <DevSection
        title="Table"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayTable />
      </DevSection>

      <DevSection
        title="Text"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayText />
      </DevSection>

      <DevSection
        title="Animate on scroll"
        activeElements={activeElements}
        setActiveElements={setActiveElements}
        isAlwaysActive={true}>
        <DisplayAnimationOnScroll />
      </DevSection>

      <DevSection
        title="Responsive Swaipeable Slider"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayResponsiveSwipeableSlider />
      </DevSection>

      <DevSection
        title="User Event"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayUserEvent />
      </DevSection>

      <DevSection
        title="Polygons"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayPolygon />
      </DevSection>

      <DevSection
        title="Limited Swipeable Slider"
        activeElements={activeElements}
        setActiveElements={setActiveElements}>
        <DisplayLimitedSwipeableSlider />
      </DevSection>
    </>
  );
};

export default DevDesign;
