import axios from 'axios';

import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';
import addDomain from '../lib/addDomain';

export const getExhibitionDetailData = async (id) => {
  const cancelTokenSource = axios.CancelToken.source();
  const timer = setTimeout(() => {
    cancelTokenSource.cancel();
  }, API.WAIT_TIME);

  const response = await axios.get(`${API.ROOT + API.EXHIBITION_DETAIL}`, { cancelToken: cancelTokenSource.token });
  // const response = await axios.get(`${API.ROOT + API.EXHIBITION}/${id}`, { cancelToken: cancelTokenSource.token });
  try {
    response.data.result = addDomain('exhibition/:id', response.data.result);
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
