import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import Search from './Search';

class AppMenu extends React.Component {
  render () {
    const { isClose, toggleNavBar } = this.props;
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
        <Search></Search>
      </div>
    );
  };
};

AppMenu.propTypes = {
  isClose: PropTypes.bool,
  toggleNavBar: PropTypes.func
};

export default AppMenu;
