import C from '../constants/artistDetailConstants';

export const toggleIsFetching = (isFetching) => ({
  type: C.TOGGLE_IS_FETCHING,
  isFetching: isFetching
});

export const toggleNoMoreData = (noMoreData) => ({
  type: C.TOGGLE_NO_MORE_DATA,
  noMoreData: noMoreData
});

export const initArtistDetailData = (data) => ({
  type: C.INIT_ARTIST_DETAIL_DATA,
  artistDetailData: data
});

export const initArtistDetailPictureData = (data) => ({
  type: C.INIT_ARTIST_DETAIL_PICTURE_DATA,
  artistDetailPictureList: data
});

export const addArtistDetailPictureData = (data) => ({
  type: C.ADD_ARTIST_DETAIL_PICTURE_DATA,
  artistDetailPictureList: data
});
