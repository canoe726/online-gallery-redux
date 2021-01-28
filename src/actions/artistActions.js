import C from '../constants/artistConstants';

export const initArtistData = (data) => ({
  type: C.INIT_ARTIST_DATA,
  artistList: data
});

export const addArtistData = (data) => ({
  type: C.ADD_ARTIST_DATA,
  artistList: data
});

export const toggleIsFetching = (isFetching) => ({
  type: C.TOGGLE_IS_FETCHING,
  isFetching: isFetching
});

export const toggleNoMoreData = (noMoreData) => ({
  type: C.TOGGLE_NO_MORE_DATA,
  noMoreData: noMoreData
});
