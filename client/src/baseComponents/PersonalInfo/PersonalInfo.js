import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';
import Anchor from '@/baseComponents/Anchor';

import { COLORS } from '@/constants/vars';
import useApiCalls from '@/hooks/useApiCalls';
import { MY_RESUME_API_ROUTE } from '@/constants/apiRoutes';
import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';

import { My_PERSONAL_INFO } from './constants';
import styles from './PersonalInfo.module.scss';

const PersonalInfo = ({ isInFooter = false }) => {
  const [pdfIconColor, setPdfIconColor] = useState(COLORS.themeOne);
  const [resume, setResume] = useState({});

  const [sendGetResumeReq, setSendGetResumeReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: sendGetResumeReq,
    setSendReq: setSendGetResumeReq,
    method: 'GET',
    url: MY_RESUME_API_ROUTE,
    useDefaultHeaders: false
  });
  useEffect(() => {
    if (data?.length) {
      setResume(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (!isInFooter) {
      setSendGetResumeReq(true);
    }
  }, [isInFooter]);

  return (
    <>
      {My_PERSONAL_INFO?.map((info, idx) => (
        <Div type="flex" hAlign="start" vAlign="center" key={idx} className="my2">
          <Icon type={info.iconType} color={!isInFooter ? COLORS.themeOne : ''} scale={1.1} />
          <Div className="ml2">{info.value}</Div>
        </Div>
      ))}
      {!isInFooter && resume?.file ? (
        <Div type="flex" className="mt2">
          <Div
            onClick={() => {
              gtag('event', 'click_download_cv_link', {
                event_category: 'Link',
                event_label: 'Download CV'
              });
            }}>
            <Anchor to={`${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}${resume?.file}`} internal={false}>
              <Div
                type="flex"
                hAlign="start"
                vAlign="center"
                className=""
                onMouseEnter={() => setPdfIconColor(COLORS.themeFour)}
                onMouseLeave={() => setPdfIconColor(COLORS.themeOne)}>
                <Icon type={'pdf-file'} color={pdfIconColor} scale={1.1} />
                <Div className="ml2">Downlad CV</Div>
              </Div>
            </Anchor>
          </Div>
        </Div>
      ) : (
        ''
      )}
    </>
  );
};

export default PersonalInfo;
