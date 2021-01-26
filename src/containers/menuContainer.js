import { connect } from 'react-redux';

import AppMenu from '../components/ui/menu/AppMenu';

import { toggleNavBar } from '../actions/menuActions';

export const Menu = connect(
  state => ({
    isClose: state.menu.navBar.isClose
  }),
  dispatch => ({
    toggleNavBar () {
      dispatch(toggleNavBar());
    }
  })
)(AppMenu);
