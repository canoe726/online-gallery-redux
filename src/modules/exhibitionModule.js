// Action Types
const INIT_EXHIBITION_DATA = 'exhibition/INIT_EXHIBITION_DATA';
const ADD_EXHIBITION_DATA = 'exhibition/ADD_EXHIBITION_DATA';
const TOGGLE_IS_FETCHING = 'exhibition/TOGGLE_IS_FETCHING';
const TOGGLE_NO_MORE_DATA = 'exhibition/TOGGLE_NO_MORE_DATA';

// Reducer
const exhibitionList = (state, action) => {
  switch (action.type) {
    case INIT_EXHIBITION_DATA:
      return action.exhibitionList;
    case ADD_EXHIBITION_DATA:
      return state.concat(action.exhibitionList);
    default :
      return state;
  }
};

export default function reducers (state = {}, action) {
  switch (action.type) {
    case INIT_EXHIBITION_DATA:
      return {
        ...state,
        exhibitionList: exhibitionList(state.exhibitionList, action)
      };
    case ADD_EXHIBITION_DATA:
      return {
        ...state,
        exhibitionList: exhibitionList(state.exhibitionList, action)
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
export const initExhibitionData = (data) => ({
  type: INIT_EXHIBITION_DATA,
  exhibitionList: data
});

export const addExhibitionData = (data) => ({
  type: ADD_EXHIBITION_DATA,
  exhibitionList: data
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching
});

export const toggleNoMoreData = (noMoreData) => ({
  type: TOGGLE_NO_MORE_DATA,
  noMoreData: noMoreData
});
