import C from '../../constants/exhibitionConstants';

export const exhibitionList = (state, action) => {
  switch (action.type) {
    case C.INIT_EXHIBITION_DATA:
      return action.exhibitionList;
    case C.ADD_EXHIBITION_DATA:
      return state.concat(action.exhibitionList);
    default :
      return state;
  }
};

export const exhibition = (state = {}, action) => {
  switch (action.type) {
    case C.INIT_EXHIBITION_DATA:
      return {
        ...state,
        exhibitionList: exhibitionList(state.exhibitionList, action)
      };
    case C.ADD_EXHIBITION_DATA:
      return {
        ...state,
        exhibitionList: exhibitionList(state.exhibitionList, action)
      };
    case C.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
};
