import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import Search from './Search';

class AppMenu extends React.Component {
  render () {
    const { isClose, isSearch, toggleNavBar, toggleIsSearch } = this.props;
    return (
      <div className="header-menu">
        <NavBar
          isClose={isClose}
          toggleNavBar={toggleNavBar}
        ></NavBar>
        <div className="gallery-logo">
          <Link to="/">
              <div className="gallery-name">Online Gallery</div>
          </Link>
        </div>
        <Search
          isSearch={isSearch}
          toggleIsSearch={toggleIsSearch}
        ></Search>
      </div>
    );
  };
};

AppMenu.propTypes = {
  isClose: PropTypes.bool,
  isSearch: PropTypes.bool,
  toggleNavBar: PropTypes.func,
  toggleIsSearch: PropTypes.func
};

export default AppMenu;
