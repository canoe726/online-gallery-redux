import axios from 'axios';

import { onlineGalleryApiConstantsSample as API } from './onlineGalleryApiConstants';

export const getArtistData = async () => {
  const response = await axios(API.ROOT + API.INIT_ARTIST_DATA);
  return response.data;
};
