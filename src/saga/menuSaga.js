import { createAction } from 'redux-actions';

// Action Types
const TOGGLE_NAVBAR = 'menu/TOGGLE_NAVBAR';
const TOGGLE_IS_SEARCH = 'menu/TOGGLE_IS_SEARCH';

// Action Constructor
export const toggleNavBar = createAction(TOGGLE_NAVBAR);
export const toggleIsSearch = createAction(TOGGLE_IS_SEARCH);

// Create Sagas

// Combine Sagas

// Initial State
const initialState = {
  navBarIsClose: true,
  searchIsActive: false
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
    default:
      return state;
  }
};
