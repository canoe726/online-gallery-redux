import axios from 'axios';

import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';
// import addDomain from '../lib/addDomain';

let exhibitionPage = 0;
let exhibitionSize = 20;

let searchPage = 0;
let searchSize = 20;

export const getExhibitionData = async () => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  console.log('page, size : ', exhibitionPage, exhibitionSize);

  const response = await axios.get(API.ROOT + API.EXHIBITION, { cancelToken: cancelTokenSource.token });
  // const response = await axios.get(`${API.ROOT + API.EXHIBITION}?page=${exhibitionPage}&size=${exhibitionSize}`, { cancelToken: cancelTokenSource.token });
  try {
    console.log(response.data.result);
    // response.data.result = addDomain('exhibition', response.data.result);
    clearTimeout(timer);
    exhibitionSize = 10;
    exhibitionPage += 1;
    return response.data.result;
  } catch (e) {
    return {
      code: e.code,
      errorCode: e.errorCode,
      message: e.message
    };
  }
};

export const getExhibitionSearchData = async (input) => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  console.log('searchPage, searchSize : ', searchPage, searchSize);
  const response = await axios.get(`${API.ROOT + API.EXHIBITION_SEARCH}`, { cancelToken: cancelTokenSource.token });
  // const response = await axios.get(`${API.ROOT + API.EXHIBITION_SEARCH}/${input}?page=${searchPage}&size=${searchSize}`, { cancelToken: cancelTokenSource.token });
  try {
    clearTimeout(timer);
    searchSize = 10;
    searchPage += 1;
    return response.data.result;
  } catch (e) {
    return {
      code: e.code,
      errorCode: e.errorCode,
      message: e.message
    };
  }
};
