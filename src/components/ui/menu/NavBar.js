import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ isClose, toggleNavBar }) => {
  return (
    <div className="nav-bar">
        <div className="nav-menu-btn">
            <button className={isClose ? 'menu-toggle' : 'menu-toggle is-active'} onClick={toggleNavBar}>Menu</button>
        </div>

        <div id="main-side-nav" className={isClose ? 'nav-menus' : 'nav-menus open'}>
            <Link to="/introduction">
            <div>온라인 갤러리 소개</div>
            </Link>
            <Link to="/exhibition">
            <div>온라인 갤러리</div>
            </Link>
            <Link to="/author">
            <div>작가 소개</div>
            </Link>
            <Link to="/notice">
            <div>공지사항</div>
            </Link>
        </div>
    </div>
  );
};

NavBar.propTypes = {
  isClose: PropTypes.bool,
  toggleNavBar: PropTypes.func
};

export default NavBar;
