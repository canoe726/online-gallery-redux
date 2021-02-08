import axios from 'axios';

// import { onlineGalleryApiConstantsSample as API } from './onlineGalleryApiConstants';
import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';

export const getArtistDetailData = async (id) => {
  // const response = await axios(API.ROOT + API.INIT_ARTIST_DETAIL_DATA);
  const response = await axios.get(`${API.ROOT + API.ARTIST}/${id}`);
  if (response.data.code === 'SUCCESS') {
    return response.data.result;
  } else {
    console.log('재 호출 코드 작성');
  }
};

// export const getArtistDetailPictureData = async () => {
//   // const response = await axios(API.ROOT + API.ADD_ARTIST_DETAIL_PICTURE);
//   const response = await axios.get(`${API.ROOT + API.ARTIST}/${id}`);
//   if (response.data.code === 'SUCCESS') {
//     return response.data.result;
//   } else {
//     console.log('재 호출 코드 작성');
//   }
// };
