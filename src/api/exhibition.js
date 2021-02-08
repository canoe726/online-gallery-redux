import axios from 'axios';

import { onlineGalleryApiConstantsSample as API } from './onlineGalleryApiConstants';
// import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';

export const getExhibitionData = async () => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  const response = await axios.get(API.ROOT + API.EXHIBITION, { cancelToken: cancelTokenSource.token });
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