import axios from 'axios';
// import { TIMEOUT } from '../constants/constants';
// import { redirectToOldDashboardLogin } from './common';

const TIMEOUT = 1000;

// eslint-disable-next-line import/prefer-default-export
export const getRequest = async (url, params, headers, cancelToken) => {
  let queryParams = '';
  if (params && Object.keys(params).length) {
    queryParams = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');
    queryParams = `?${queryParams}`;
  }
  const finalUrl = `${url}${queryParams}`;
  const data = await axios.get(finalUrl, { headers, timeout: TIMEOUT, cancelToken })
    .then((resp) => resp.data)
    .catch((err) => getErrorResponse(err));
  return data;
};

export const postRequest = async (
  url,
  params,
  headers,
  cancelToken
) => {
  const data = await axios({
    method: 'post',
    url,
    data: params,
    headers,
    cancelToken,
    timeout: TIMEOUT,
  })
    .then((resp) => resp.data)
    .catch((err) => getErrorResponse(err));
  return data;
};

export const deleteRequest = async (url, params, headers) => {
  const data = await axios.delete(url, {
    headers,
    timeout: TIMEOUT,
  })
    .then((resp) => resp.data)
    .catch((err) => getErrorResponse(err));
  return data;
};

export const putRequest = async (
  url,
  params,
  headers,
  cancelToken
) => {
  const data = await axios({
    method: 'put',
    url,
    data: params,
    headers,
    cancelToken,
    timeout: TIMEOUT,
  })
    .then((resp) => resp.data)
    .catch((err) => getErrorResponse(err));
  return data;
};

const getErrorResponse = (err) => {
  let errorMsg = 'We cannot reach the server at the moment. Please try again later';
  if (err.response) {
    if (err.response.status === 401 || err.response.status === 511 || err.response.status === 440) {
      errorMsg = 'Unauthorized';
      // redirectToOldDashboardLogin();
      // window.onbeforeunload = undefined;
      // window.location = process.env.OLD_DASHBOARD_URL;
    } else if (err.response.status === 500) {
      errorMsg = err.response.data.msg || 'Internal server error, try again later';
    } else if (err.response.status > 500) {
      errorMsg = 'We cannot reach the server at the moment. Please try again later';
    } else if (err.response.data.msg) {
      errorMsg = err.response.data.msg || errorMsg;
    }
  }
  return {
    error: true,
    message: errorMsg,
  };
};
