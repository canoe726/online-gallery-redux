import axios from 'axios';

import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';

let page = 0;
let size = 20;

export const getExhibitionData = async () => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  console.log('page, size : ', page, size);

  const response = await axios.get(API.ROOT + API.EXHIBITION, { cancelToken: cancelTokenSource.token });
  try {
    clearTimeout(timer);
    size = 10;
    page += 1;
    return response.data.result;
  } catch (e) {
    return {
      code: e.code,
      errorCode: e.errorCode,
      message: e.message
    };
  }
};
