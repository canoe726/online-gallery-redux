import axios from 'axios';

import { onlineGalleryApiConstantsSample as API } from './onlineGalleryApiConstants';

export const getExhibitionData = async () => {
  const response = await axios(API.ROOT + API.INIT_EXHIBITION_DATA);
  return response.data;
};
