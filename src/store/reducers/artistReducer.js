import C from '../../constants/artistConstants';

export const artistList = (state, action) => {
  switch (action.type) {
    case C.INIT_ARTIST_DATA:
      return action.artistList;
    case C.ADD_ARTIST_DATA:
      return state.concat(action.artistList);
    default :
      return state;
  }
};

export const artist = (state = {}, action) => {
  switch (action.type) {
    case C.INIT_ARTIST_DATA:
      return {
        ...state,
        artistList: artistList(state.artistList, action)
      };
    case C.ADD_ARTIST_DATA:
      return {
        ...state,
        artistList: artistList(state.artistList, action)
      };
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
    default:
      return state;
  }
};
