import { connect } from 'react-redux';

import AppMenu from '../components/ui/menu/AppMenu';

import { toggleNavBar, toggleIsSearch } from '../actions/menuActions';

export const Menu = connect(
  state => ({
    isClose: state.menu.navBar.isClose,
    isSearch: state.menu.search.isSearch
  }),
  dispatch => ({
    toggleNavBar () {
      dispatch(toggleNavBar());
    },
    toggleIsSearch (isSearch) {
      dispatch(toggleIsSearch(isSearch));
    }
  })
)(AppMenu);
