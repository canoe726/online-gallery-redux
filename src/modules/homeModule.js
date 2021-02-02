// Action Types
const INIT_HOME_BANNER = 'home/INIT_HOME_BANNER';
const INIT_HOME_EXHIBITION = 'home/INIT_HOME_EXHIBITION';
const INIT_HOME_ARTIST = 'home/INIT_HOME_ARTIST';
const CHANGE_HOME_BANNER_IDX = 'home/CHANGE_HOME_BANNER_IDX';
const CHANGE_HOME_EXHIBITION_CARD_IDX = 'home/CHANGE_HOME_EXHIBITION_CARD_IDX';
const CHANGE_HOME_ARTIST_CARD_IDX = 'home/CHANGE_HOME_ARTIST_CARD_IDX';

// Reducer
export default function reducers (state = {}, action) {
  switch (action.type) {
    case INIT_HOME_BANNER:
      return {
        ...state,
        banner: action.banner
      };
    case INIT_HOME_EXHIBITION:
      return {
        ...state,
        exhibition: action.exhibition
      };
    case INIT_HOME_ARTIST:
      return {
        ...state,
        artist: action.artist
      };
    case CHANGE_HOME_BANNER_IDX:
      return {
        ...state,
        bannerIdx: action.bannerIdx
      };
    case CHANGE_HOME_EXHIBITION_CARD_IDX:
      return {
        ...state,
        exhibitionCardIdx: action.exhibitionCardIdx
      };
    case CHANGE_HOME_ARTIST_CARD_IDX:
      return {
        ...state,
        artistCardIdx: action.artistCardIdx
      };
    default:
      return state;
  }
};

// Action Constructor
export const initHomeBanner = (data) => ({
  type: INIT_HOME_BANNER,
  banner: data
});

export const initHomeExhibition = (data) => ({
  type: INIT_HOME_EXHIBITION,
  exhibition: data
});

export const initHomeArtist = (data) => ({
  type: INIT_HOME_ARTIST,
  artist: data
});

export const changeHomeBannerIdx = (bannerIdx) => ({
  type: CHANGE_HOME_BANNER_IDX,
  bannerIdx: bannerIdx
});

export const changeHomeExhibitionCardIdx = (exhibitionCardIdx) => ({
  type: CHANGE_HOME_EXHIBITION_CARD_IDX,
  exhibitionCardIdx: exhibitionCardIdx
});

export const changeHomeArtistCardIdx = (artistCardIdx) => ({
  type: CHANGE_HOME_EXHIBITION_CARD_IDX,
  artistCardIdx: artistCardIdx
});