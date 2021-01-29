import C from '../constants/menuConstants';

export const toggleNavBar = () => ({
  type: C.TOGGLE_NAVBAR
});

export const toggleIsSearch = (isSearch) => ({
  type: C.TOGGLE_IS_SEARCH,
  isSearch: isSearch
});
