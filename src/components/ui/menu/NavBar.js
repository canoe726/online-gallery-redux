import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ isClose, toggleNavBar }) => {
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="nav-bar">
        <div className="nav-menu-btn">
            <button
              className={isClose ? 'menu-toggle' : 'menu-toggle is-active'}
              onClick={() => isClose ? toggleNavBar(false) : toggleNavBar(true)}
            >Menu</button>
        </div>
        <div
          id="main-side-nav"
          className={isClose ? 'nav-menus' : 'nav-menus open'}
          >
            <div>
              <Link to="/info" onClick={() => toggleNavBar(true)}>온라인 갤러리 소개</Link>
            </div>
            <div>
              <Link to="/exhibition" onClick={() => toggleNavBar(true)}>온라인 갤러리</Link>
            </div>
            <div>
              <Link to="/artist" onClick={() => toggleNavBar(true)}>작가 소개</Link>
            </div>
            <div>
              <Link to="/notice" onClick={() => toggleNavBar(true)}>공지사항</Link>
            </div>
        </div>
    </div>
  );

  function handleClickOutside (e) {
    const isMenu = e.target.classList.contains('menu-toggle');
    const isSideNav = e.target.classList.contains('nav-menus');

    if (!isMenu && !isSideNav) {
      if (!isClose) {
        toggleNavBar(true);
      }
    }
  }
};

NavBar.propTypes = {
  isClose: PropTypes.bool,
  toggleNavBar: PropTypes.func
};

export default NavBar;
