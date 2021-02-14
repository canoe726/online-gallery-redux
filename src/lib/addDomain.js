import { onlineGalleryApiConstants as API } from '../api/onlineGalleryApiConstants';

export default function addDomain (path, data) {
  let result = null;
  switch (path) {
    case 'home/banner':
      result = data.map(item => {
        return {
          ...item,
          posterImage: API.ROOT_IMG + item.posterImage
        };
      });
      break;
    case 'home/exhibition':
      result = data.map(item => {
        return {
          ...item,
          posterImage: `${API.ROOT_IMG + item.posterImage}?scaling=80`
        };
      });
      break;
    case 'home/artist':
      result = data.map(item => {
        return {
          ...item,
          profileImage: `${API.ROOT_IMG + item.profileImage}?scaling=80`
        };
      });
      break;
    case 'artist':
      result = data.map(item => {
        return {
          ...item,
          profileImage: `${API.ROOT_IMG + item.profileImage}?scaling=80`
        };
      });
      break;
    case 'artist/search':
      result = data.map(item => {
        return {
          ...item,
          profileImage: `${API.ROOT_IMG + item.profileImage}?scaling=80`
        };
      });
      break;
    case 'artist/:id':
      result = {
        ...data,
        artist: {
          ...data.artist,
          profileImage: API.ROOT_IMG + data.artist.profileImage
        }
      };
      break;
    case 'exhibition':
      result = data.map(item => {
        return {
          ...item,
          posterImage: `${API.ROOT_IMG + item.posterImage}?scaling=80`
        };
      });
      break;
    case 'exhibition/:id':
      result = data.map(item => {
        return {
          ...item,
          exhibitionItem: {
            ...item.exhibitionItem,
            image: item.exhibitionItem.type === 'IMAGE'
              ? API.ROOT_IMG + item.exhibitionItem.image
              : API.ROOT_VIDEO + item.exhibitionItem.image
          },
          exhibitionItemBackground: {
            ...item.exhibitionItemBackground,
            value: item.exhibitionItemBackground.type === 'IMAGE'
              ? API.ROOT_IMG + item.exhibitionItemBackground.value
              : API.ROOT_VIDEO + item.exhibitionItemBackground.value,
            bgm: API.ROOT_IMG + item.exhibitionItemBackground.bgm
          }
        };
      });
      break;
    default:
      break;
  }
  return result;
};
