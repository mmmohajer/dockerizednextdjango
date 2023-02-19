import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';
import Anchor from '@/baseComponents/Anchor';
import DivConvertTextToHtml from '../DivConvertTextToHtml';

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
        <Div type="flex" hAlign="start" vAlign="start" key={idx} className="my2">
          <Div>
            <Icon type={info.iconType} color={!isInFooter ? COLORS.themeOne : ''} scale={1.25} />
          </Div>
          <DivConvertTextToHtml className="ml2" text={info.value} />
        </Div>
      ))}
    </>
  );
};

export default PersonalInfo;
