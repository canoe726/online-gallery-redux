import axios from 'axios';

import { onlineGalleryApiConstantsSample as API } from './onlineGalleryApiConstants';

export const getHomeBanner = async () => {
  const response = await axios.get(API.ROOT + API.HOME_BANNER);
  return response.data;
};

export const getHomeExhibition = async () => {
  const response = await axios.get(API.ROOT + API.HOME_EXHIBITION);
  return response.data;
};

export const getHomeArtist = async () => {
  const response = await axios.get(API.ROOT + API.HOME_ARTIST);
  return response.data;
};
