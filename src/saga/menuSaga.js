import { createAction } from 'redux-actions';

// Action Types
const TOGGLE_NAVBAR = 'menu/TOGGLE_NAVBAR';
const TOGGLE_IS_SEARCH = 'menu/TOGGLE_IS_SEARCH';
const INIT_SEARCH_DATA = 'INIT_SEARCH_DATA';
const GET_SEARCH_DATA = 'GET_SEARCH_DATA';

// Action Constructor
export const toggleNavBar = createAction(TOGGLE_NAVBAR);
export const toggleIsSearch = createAction(TOGGLE_IS_SEARCH);
export const initSearchData = createAction(INIT_SEARCH_DATA);
export const getSearchData = createAction(GET_SEARCH_DATA);

// Create Sagas

// Combine Sagas

// Initial State
const initialState = {
  navBarIsClose: true,
  searchIsActive: false,
  search: {
    value: null,
    url: null
  }
};

// Reducer
export default function menu (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        navBarIsClose: action.payload
      };
    case TOGGLE_IS_SEARCH:
      return {
        ...state,
        searchIsActive: action.payload
      };
    case INIT_SEARCH_DATA:
      return {
        ...state,
        search: {
          value: null,
          url: null
        }
      };
    case GET_SEARCH_DATA:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};
