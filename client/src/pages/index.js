import React, { useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Div } from 'basedesign-iswad';

import Logout from '@/baseComponents/Logout';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import { setTestimonials } from '@/services/testimonials';
import { TESTIMONIAL_API_ROUTE } from '@/constants/apiRoutes';
import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from '@/root/config';

import styles from './index.module.scss';

const Index = ({ testimonials }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTestimonials(dispatch, testimonials);
  }, [testimonials]);

  return (
    <PublicRoute>
      <Seo title="Mohammad Mohajer">
        <PageContainer pageIdentifier="home" hasStickyHeader={true} changesThePage={false}>
          <Div>Hello</Div>
          <Logout />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
