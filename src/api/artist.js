import axios from 'axios';

// import { onlineGalleryApiConstantsSample as API } from './onlineGalleryApiConstants';
import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';

export const getArtistData = async () => {
  // const response = await axios(API.ROOT + API.INIT_ARTIST_DATA);
  const response = await axios.get(API.ROOT + API.ARTIST);
  if (response.data.code === 'SUCCESS') {
    return response.data.result;
  } else {
    console.log('재 호출 코드 작성');
  }
};
