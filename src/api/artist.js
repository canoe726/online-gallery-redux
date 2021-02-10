import axios from 'axios';

import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';

export const getArtistData = async () => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  const response = await axios.get(API.ROOT + API.ARTIST, { cancelToken: cancelTokenSource.token });
  try {
    clearTimeout(timer);
    return response.data.result;
  } catch (e) {
    return {
      code: e.code,
      errorCode: e.errorCode,
      message: e.message
    };
  }
};
