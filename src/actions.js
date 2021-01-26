import C from './constants';

export const toggleNavBar = () => ({
  type: C.TOGGLE_NAVBAR
});

export const initHomeBanner = (data) => ({
  type: C.INIT_HOME_BANNER,
  banner: data
});

export const initHomeExhibition = (data) => ({
  type: C.INIT_HOME_EXHIBITION,
  exhibition: data
});

export const initHomeArtist = (data) => ({
  type: C.INIT_HOME_ARTIST,
  artist: data
});

export const changeHomeBannerIdx = (bannerIdx) => ({
  type: C.CHANGE_HOME_BANNER_IDX,
  bannerIdx: bannerIdx
});

export const changeHomeExhibitionCardIdx = (exhibitionCardIdx) => ({
  type: C.CHANGE_HOME_EXHIBITION_CARD_IDX,
  exhibitionCardIdx: exhibitionCardIdx
});

export const changeHomeArtistCardIdx = (artistCardIdx) => ({
  type: C.CHANGE_HOME_EXHIBITION_CARD_IDX,
  artistCardIdx: artistCardIdx
});
