import { connect } from 'react-redux';

import Menu from '../components/ui/menu/Menu';

import { toggleNavBar, toggleIsSearch } from '../modules/menuModule';

export const MenuContainer = connect(
  state => ({
    isClose: state.menu.navBar.isClose,
    isSearch: state.menu.search.isSearch
  }),
  dispatch => ({
    toggleNavBar (isClose) {
      dispatch(toggleNavBar(isClose));
    },
    toggleIsSearch (isSearch) {
      dispatch(toggleIsSearch(isSearch));
    }
  })
)(Menu);
