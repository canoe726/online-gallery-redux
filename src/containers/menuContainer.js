import React from 'react';
import { useSelector } from 'react-redux';

import Menu from '../components/menu/Menu';

import { toggleNavBar, toggleIsSearch } from '../saga/menuSaga';

function MenuContainer () {
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

export default MenuContainer;
