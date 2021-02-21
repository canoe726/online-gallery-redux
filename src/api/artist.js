import axios from 'axios';

import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';
import addDomain from '../lib/addDomain';

let artistPage = 0;
let artistSize = 20;

export const getArtistData = async () => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  console.log('artistPage, artistSize', artistPage, artistSize);
  // const response = await axios.get(`${API.ROOT + API.ARTIST}`, { cancelToken: cancelTokenSource.token });
  const response = await axios.get(`${API.ROOT + API.ARTIST}?page=${artistPage}&size=${artistSize}`, { cancelToken: cancelTokenSource.token });
  try {
    response.data.result = addDomain('artist', response.data.result);
    clearTimeout(timer);
    artistPage += 1;
    artistSize = 10;
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

export const getArtistSearchData = async (input) => {
  if (beforeInput !== input) {
    beforeInput = input;
    searchPage = 0;
    searchSize = 20;
  }

  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  // const response = await axios.get(`${API.ROOT + API.ARTIST_SEARCH}`, { cancelToken: cancelTokenSource.token });
  const response = await axios.get(`${API.ROOT + API.ARTIST_SEARCH}/${input}?page=${searchPage}&size=${searchSize}`, { cancelToken: cancelTokenSource.token });
  try {
    response.data.result = addDomain('artist/search', response.data.result);
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
