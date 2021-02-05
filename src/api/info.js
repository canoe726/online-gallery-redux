import axios from 'axios';

import { onlineGalleryApiConstantsSample as API } from './onlineGalleryApiConstants';

export const getInfoData = async () => {
  const response = await axios.get(API.ROOT + API.INFO_DATA);
  return response.data;
};
