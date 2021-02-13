import axios from 'axios';

import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';
import addDomain from '../lib/addDomain';

export const getHomeBanner = async () => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  const response = await axios.get(API.ROOT + API.HOME_BANNER, { cancelToken: cancelTokenSource.token });
  try {
    clearTimeout(timer);
    response.data.result = addDomain('home/banner', response.data.result);
    return response.data.result;
  } catch (e) {
    return {
      code: e.code,
      errorCode: e.errorCode,
      message: e.message
    };
  }
};

export const getHomeExhibition = async () => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  const response = await axios.get(API.ROOT + API.HOME_EXHIBITION, { cancelToken: cancelTokenSource.token });
  try {
    clearTimeout(timer);
    response.data.result = addDomain('home/exhibition', response.data.result);
    return response.data.result;
  } catch (e) {
    return {
      code: e.code,
      errorCode: e.errorCode,
      message: e.message
    };
  }
};

export const getHomeArtist = async () => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  const response = await axios.get(API.ROOT + API.HOME_ARTIST, { cancelToken: cancelTokenSource.token });
  try {
    clearTimeout(timer);
    response.data.result = addDomain('home/artist', response.data.result);
    return response.data.result;
  } catch (e) {
    return {
      code: e.code,
      errorCode: e.errorCode,
      message: e.message
    };
  }
};
