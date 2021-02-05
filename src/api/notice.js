import axios from 'axios';

import { onlineGalleryApiConstantsSample as API } from './onlineGalleryApiConstants';

export const getNoticeData = async () => {
  const response = await axios.get(API.ROOT + API.NOTICE);
  return response.data;
};
