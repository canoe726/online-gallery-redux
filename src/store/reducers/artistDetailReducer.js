import C from '../../constants/artistDetailConstants';

export const artistDetailPictureList = (state, action) => {
  switch (action.type) {
    case C.INIT_ARTIST_DETAIL_PICTURE_DATA:
      return action.artistDetailPictureList;
    case C.ADD_ARTIST_DETAIL_PICTURE_DATA:
      return state.concat(action.artistDetailPictureList);
    default :
      return state;
  }
};

export const artistDetail = (state = {}, action) => {
  switch (action.type) {
    case C.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case C.TOGGLE_NO_MORE_DATA:
      return {
        ...state,
        noMoreData: action.noMoreData
      };
    case C.INIT_ARTIST_DETAIL_DATA:
      return {
        ...state,
        artistDetailData: action.artistDetailData
      };
    case C.INIT_ARTIST_DETAIL_PICTURE_DATA:
      return {
        ...state,
        artistDetailPictureList: artistDetailPictureList(state.artistDetailPictureList, action)
      };
    case C.ADD_ARTIST_DETAIL_PICTURE_DATA:
      return {
        ...state,
        artistDetailPictureList: artistDetailPictureList(state.artistDetailPictureList, action)
      };
    default:
      return state;
  }
};
