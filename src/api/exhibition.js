import axios from 'axios';

import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';
import addDomain from '../lib/addDomain';

let exhibitionPage = 0;
let exhibitionSize = 20;

export const getExhibitionData = async () => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  // const response = await axios.get(API.ROOT + API.EXHIBITION, { cancelToken: cancelTokenSource.token });
  const response = await axios.get(`${API.ROOT + API.EXHIBITION}?page=${exhibitionPage}&size=${exhibitionSize}`, { cancelToken: cancelTokenSource.token });
  try {
    response.data.result = addDomain('exhibition', response.data.result);
    clearTimeout(timer);
    exhibitionPage += 1;
    exhibitionSize = 10;
    return response.data.result;
  } catch (e) {
    return {
      code: e.code,
      errorCode: e.errorCode,
      message: e.message
    };
  }
};

let beforeInput = null;
let searchPage = 0;
let searchSize = 20;

export const getExhibitionSearchData = async (input) => {
  if (beforeInput !== input) {
    beforeInput = input;
    searchPage = 0;
    searchSize = 20;
  }

  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  console.log('searchPage, searchSize : ', searchPage, searchSize);
  const response = await axios.get(`${API.ROOT + API.EXHIBITION_SEARCH}`, { cancelToken: cancelTokenSource.token });
  // const response = await axios.get(`${API.ROOT + API.EXHIBITION_SEARCH}/${input}?page=${searchPage}&size=${searchSize}`, { cancelToken: cancelTokenSource.token });
  try {
    clearTimeout(timer);
    searchPage += 1;
    searchSize = 10;
    return response.data.result;
  } catch (e) {
    return {
      code: e.code,
      errorCode: e.errorCode,
      message: e.message
    };
  }
};
