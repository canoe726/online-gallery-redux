// Action Types
const TOGGLE_NAVBAR = 'menu/TOGGLE_NAVBAR';
const TOGGLE_IS_SEARCH = 'menu/TOGGLE_IS_SEARCH';

// Reducer
export default function reducers (state = {}, action) {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        navBar: {
          isClose: !state.navBar.isClose
        }
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
export const toggleNavBar = () => {
  return {
    type: TOGGLE_NAVBAR
  };
};

export const toggleIsSearch = (isSearch) => {
  return {
    type: TOGGLE_IS_SEARCH,
    isSearch: isSearch
  };
};
