import C from '../constants/artistConstants';

export const initArtistData = (data) => ({
  type: C.INIT_ARTIST_DATA,
  exhibitionList: data
});

export const addArtistData = (data) => ({
  type: C.ADD_ARTIST_DATA,
  artistList: data
});

export const toggleIsFetching = (isFetching) => ({
  type: C.TOGGLE_IS_FETCHING,
  isFetching: isFetching
});
