import axios from 'axios';

import { onlineGalleryApiConstantsSample as API } from './onlineGalleryApiConstants';

export const getExhibitionDetailData = async () => {
  const response = await axios(API.ROOT + API.EXHIBITION_DETAIL_DATA);
  return response.data;
};
