import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Menu from '../components/menu/Menu';

import { toggleNavBar, toggleIsSearch, getSearchData, initSearchData } from '../saga/menuSaga';
import { initExhibitionList } from '../saga/exhibitionSaga';
import { initArtistSearchList } from '../saga/artistSaga';

function MenuContainer ({ url }) {
  const { navBarIsClose, searchIsActive } = useSelector(
    state => state.menu
  ) || {
    navBarIsClose: true,
    searchIsActive: false
  };

  let initSearchListData = null;
  if (url.includes('exhibition')) {
    initSearchListData = initExhibitionList;
  } else {
    initSearchListData = initArtistSearchList;
  }

  return (
    <Menu
      navBarIsClose={navBarIsClose}
      searchIsActive={searchIsActive}
      toggleNavBar={toggleNavBar}
      toggleIsSearch={toggleIsSearch}
      getSearchData={getSearchData}
      initSearchData={initSearchData}
      initSearchListData={initSearchListData}
    ></Menu>);
};

MenuContainer.propTypes = {
  url: PropTypes.string
};

export default MenuContainer;
