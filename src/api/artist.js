import axios from 'axios';

import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';

let artistPage = 0;
let artistSize = 20;

let searchPage = 0;
let searchSize = 20;

export const getArtistData = async () => {
  console.log('artistPage, artistSize : ', artistPage, artistSize);

  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  const response = await axios.get(`${API.ROOT + API.ARTIST}`, { cancelToken: cancelTokenSource.token });
  // const response = await axios.get(`${API.ROOT + API.ARTIST}?page=${artistPage}&size=${artistSize}`, { cancelToken: cancelTokenSource.token });
  try {
    clearTimeout(timer);
    artistSize = 10;
    artistPage += 1;
    return response.data.result;
  } catch (e) {
    return {
      code: e.code,
      errorCode: e.errorCode,
      message: e.message
    };
  }
};

export const getArtistSearchData = async (input) => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  console.log('searchPage, searchSize : ', searchPage, searchSize);
  const response = await axios.get(`${API.ROOT + API.ARTIST_SEARCH}`, { cancelToken: cancelTokenSource.token });
  // const response = await axios.get(`${API.ROOT + API.ARTIST_SEARCH}/${input}?page=${searchPage}&size=${searchSize}`, { cancelToken: cancelTokenSource.token });
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
