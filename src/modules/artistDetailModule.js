// Action Types
const TOGGLE_NO_MORE_DATA = 'artist-detail/TOGGLE_NO_MORE_DATA';
const TOGGLE_IS_FETCHING = 'artist-detail/TOGGLE_IS_FETCHING';
const INIT_ARTIST_DETAIL_DATA = 'artist-detail/INIT_ARTIST_DETAIL_DATA';
const INIT_ARTIST_DETAIL_PICTURE_DATA = 'artist-detail/INIT_ARTIST_DETAIL_PICTURE_DATA';
const ADD_ARTIST_DETAIL_PICTURE_DATA = 'artist-detail/ADD_ARTIST_DETAIL_PICTURE_DATA';

// Reducer
const artistDetailPictureList = (state, action) => {
  switch (action.type) {
    case INIT_ARTIST_DETAIL_PICTURE_DATA:
      return action.artistDetailPictureList;
    case ADD_ARTIST_DETAIL_PICTURE_DATA:
      return state.concat(action.artistDetailPictureList);
    default :
      return state;
  }
};

export default function artistDetail (state = {}, action) {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGLE_NO_MORE_DATA:
      return {
        ...state,
        noMoreData: action.noMoreData
      };
    case INIT_ARTIST_DETAIL_DATA:
      return {
        ...state,
        artistDetailData: action.artistDetailData
      };
    case INIT_ARTIST_DETAIL_PICTURE_DATA:
      return {
        ...state,
        artistDetailPictureList: artistDetailPictureList(state.artistDetailPictureList, action)
      };
    case ADD_ARTIST_DETAIL_PICTURE_DATA:
      return {
        ...state,
        artistDetailPictureList: artistDetailPictureList(state.artistDetailPictureList, action)
      };
    default:
      return state;
  }
};

// Action Constructor
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching
});

export const toggleNoMoreData = (noMoreData) => ({
  type: TOGGLE_NO_MORE_DATA,
  noMoreData: noMoreData
});

export const initArtistDetailData = (data) => ({
  type: INIT_ARTIST_DETAIL_DATA,
  artistDetailData: data
});

export const initArtistDetailPictureData = (data) => ({
  type: INIT_ARTIST_DETAIL_PICTURE_DATA,
  artistDetailPictureList: data
});

export const addArtistDetailPictureData = (data) => ({
  type: ADD_ARTIST_DETAIL_PICTURE_DATA,
  artistDetailPictureList: data
});
