// Action Types
const TOGGLE_NAVBAR = 'menu/TOGGLE_NAVBAR';
const TOGGLE_IS_SEARCH = 'menu/TOGGLE_IS_SEARCH';

// Reducer
const navBar = (state, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        isClose: action.isClose
      };
    default:
      return state;
  }
};

export default function menu (state = {}, action) {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        navBar: navBar(state.navBar, action)
      };
    case TOGGLE_IS_SEARCH:
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

// Action Constructor
export const toggleNavBar = (isClose) => {
  return {
    type: TOGGLE_NAVBAR,
    isClose: isClose
  };
};

export const toggleIsSearch = (isSearch) => {
  return {
    type: TOGGLE_IS_SEARCH,
    isSearch: isSearch
  };
};
