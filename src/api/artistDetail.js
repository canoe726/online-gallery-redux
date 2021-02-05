import axios from 'axios';

import { onlineGalleryApiConstantsSample as API } from './onlineGalleryApiConstants';

export const getArtistDetailData = async () => {
  const response = await axios(API.ROOT + API.INIT_ARTIST_DETAIL_DATA);
  return response.data;
};

export const getArtistDetailPictureData = async () => {
  const response = await axios(API.ROOT + API.ADD_ARTIST_DETAIL_PICTURE);
  return response.data;
};
