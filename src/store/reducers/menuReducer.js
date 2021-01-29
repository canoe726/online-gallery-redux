import C from '../../constants/menuConstants';

export const menu = (state = {}, action) => {
  switch (action.type) {
    case C.TOGGLE_NAVBAR:
      return {
        ...state,
        navBar: {
          isClose: !state.navBar.isClose
        }
      };
    case C.TOGGLE_IS_SEARCH:
      return {
        ...state,
        search: {
          isSearch: action.isSearch
        }
      };
    default:
      return state;
  }
};
