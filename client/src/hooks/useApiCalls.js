import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { getLocalStorage } from '@/utils/auth';
import { TOKEN_SPACE_WORD } from '@/constants/vars';
import { isLoading, isLoaded } from '@/reducers/general/loading';
import { showErrorAPIAlert } from '@/utils/notifications';
import { WITHOUT_DOCKER, API_BASE_URL_WITHOUT_DOCKER } from '@/root/config';

const useApiCalls = ({
  sendReq,
  setSendReq,
  method,
  url,
  bodyData,
  headers,
  useDefaultHeaders = true,
  showLoading = true,
  showErrorMessage = true
}) => {
  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      if (Boolean(parseInt(WITHOUT_DOCKER))) {
        url = `${API_BASE_URL_WITHOUT_DOCKER}${url}`;
      }

      const accessToken = getLocalStorage('access_token');
      if (useDefaultHeaders && accessToken) {
        if (!headers) {
          headers = { Authorization: `${TOKEN_SPACE_WORD} ${accessToken}` };
        } else {
          headers['Authorization'] = `${TOKEN_SPACE_WORD} ${accessToken}`;
        }
      }
      try {
        let res;
        if (showLoading) {
          dispatch(isLoading());
        }
        if (method.toLowerCase() === 'get') {
          res = await axios.get(url, headers && { headers });
        } else if (method.toLowerCase() === 'post') {
          res = await axios.post(url, bodyData && bodyData, headers && { headers });
        } else if (method.toLowerCase() === 'put') {
          res = await axios.put(url, bodyData && bodyData, headers && { headers });
        } else if (method.toLowerCase() === 'patch') {
          res = await axios.patch(url, bodyData && bodyData, headers && { headers });
        } else if (method.toLowerCase() === 'delete') {
          res = await axios.delete(url, headers && { headers });
        }
        if (res?.data) {
          setData(res.data);
        }
        if (showLoading) {
          dispatch(isLoaded());
        }
      } catch (err) {
        setError(err.response);
        if (showLoading) {
          dispatch(isLoaded());
        }
        if (showErrorMessage) {
          showErrorAPIAlert(err.response, dispatch);
        }
      }
      setSendReq(false);
    };
    if (sendReq) {
      sendRequest();
    }
  }, [sendReq]);
  return { data, error };
};

export default useApiCalls;
