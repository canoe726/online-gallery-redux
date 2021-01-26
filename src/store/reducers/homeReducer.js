import C from '../../constants/homeConstants';

export const home = (state = {}, action) => {
  switch (action.type) {
    case C.INIT_HOME_BANNER:
      return {
        ...state,
        banner: action.banner
      };
    case C.INIT_HOME_EXHIBITION:
      return {
        ...state,
        exhibition: action.exhibition
      };
    case C.INIT_HOME_ARTIST:
      return {
        ...state,
        artist: action.artist
      };
    case C.CHANGE_HOME_BANNER_IDX:
      return {
        ...state,
        bannerIdx: action.bannerIdx
      };
    case C.CHANGE_HOME_EXHIBITION_CARD_IDX:
      return {
        ...state,
        exhibitionCardIdx: action.exhibitionCardIdx
      };
    case C.CHANGE_HOME_ARTIST_CARD_IDX:
      return {
        ...state,
        artistCardIdx: action.artistCardIdx
      };
    default:
      return state;
  }
};
