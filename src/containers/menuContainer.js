import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Menu from '../components/menu/Menu';

import { toggleNavBar, toggleIsSearch } from '../saga/menuSaga';

function MenuContainer ({ currentUrl }) {
  const { navBarIsClose, searchIsActive } = useSelector(
    state => state.menu
  ) || {
    navBarIsClose: true,
    searchIsActive: false
  };

  return (
    <Menu
      navBarIsClose={navBarIsClose}
      searchIsActive={searchIsActive}
      toggleNavBar={toggleNavBar}
      toggleIsSearch={toggleIsSearch}
    ></Menu>);
};

MenuContainer.propTypes = {
  currentUrl: PropTypes.string
};

export default MenuContainer;
