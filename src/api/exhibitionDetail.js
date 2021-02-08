import axios from 'axios';

// import { onlineGalleryApiConstantsSample as API } from './onlineGalleryApiConstants';
import { onlineGalleryApiConstants as API } from './onlineGalleryApiConstants';

export const getExhibitionDetailData = async (id) => {
  // const response = await axios(API.ROOT + API.EXHIBITION_DETAIL_DATA);
  const response = await axios.get(`${API.ROOT + API.EXHIBITION}/${id}`);
  if (response.data.code === 'SUCCESS') {
    return response.data.result;
  } else {
    console.log('재 호출 코드 작성');
  }
};
