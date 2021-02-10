import React from 'react';
import { useSelector } from 'react-redux';

import Menu from '../components/menu/Menu';

import { toggleNavBar, toggleIsSearch, getSearchData, initSearchData } from '../saga/menuSaga';
import { initArtistSearchList } from '../saga/artistSaga';

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
      getSearchData={getSearchData}
      initSearchData={initSearchData}
      initArtistSearchList={initArtistSearchList}
    ></Menu>);
};

export default MenuContainer;
