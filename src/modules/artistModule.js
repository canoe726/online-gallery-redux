// Action Types
const INIT_ARTIST_DATA = 'artist/INIT_ARTIST_DATA';
const ADD_ARTIST_DATA = 'artist/ADD_ARTIST_DATA';
const TOGGLE_IS_FETCHING = 'artist/TOGGLE_IS_FETCHING';
const TOGGLE_NO_MORE_DATA = 'artist/TOGGLE_NO_MORE_DATA';

// Reducer
const artistList = (state, action) => {
  switch (action.type) {
    case INIT_ARTIST_DATA:
      return action.artistList;
    case ADD_ARTIST_DATA:
      return state.concat(action.artistList);
    default :
      return state;
  }
};

export default function reducers (state = {}, action) {
  switch (action.type) {
    case INIT_ARTIST_DATA:
      return {
        ...state,
        artistList: artistList(state.artistList, action)
      };
    case ADD_ARTIST_DATA:
      return {
        ...state,
        artistList: artistList(state.artistList, action)
      };
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
    default:
      return state;
  }
};

// Action Constructor
export const initArtistData = (data) => ({
  type: INIT_ARTIST_DATA,
  artistList: data
});

export const addArtistData = (data) => ({
  type: ADD_ARTIST_DATA,
  artistList: data
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching
});

export const toggleNoMoreData = (noMoreData) => ({
  type: TOGGLE_NO_MORE_DATA,
  noMoreData: noMoreData
});
