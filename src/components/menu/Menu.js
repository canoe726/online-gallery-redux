import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import Search from './Search';

const Menu = ({
  navBarIsClose,
  searchIsActive,
  toggleNavBar,
  toggleIsSearch,
  getSearchData,
  initSearchData,
  initArtistSearchList
}) => {
  return (
    <div className="header-menu">
      <NavBar
        navBarIsClose={navBarIsClose}
        toggleNavBar={toggleNavBar}
      ></NavBar>
      <div className="gallery-logo">
        <div className="gallery-name">
          <Link to="/">Online Gallery</Link>
        </div>
      </div>
      <Search
        searchIsActive={searchIsActive}
        toggleIsSearch={toggleIsSearch}
        getSearchData={getSearchData}
        initSearchData={initSearchData}
        initArtistSearchList={initArtistSearchList}
      ></Search>
    </div>
  );
};

Menu.propTypes = {
  navBarIsClose: PropTypes.bool,
  searchIsActive: PropTypes.bool,
  toggleNavBar: PropTypes.func,
  toggleIsSearch: PropTypes.func,
  getSearchData: PropTypes.func,
  initSearchData: PropTypes.func,
  initArtistSearchList: PropTypes.func
};

export default Menu;
