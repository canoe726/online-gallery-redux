import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

NavBar.propTypes = {
  navBarIsClose: PropTypes.bool,
  toggleNavBar: PropTypes.func
};

function NavBar ({ navBarIsClose, toggleNavBar }) {
  const dispatch = useDispatch();

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
              className={navBarIsClose ? 'menu-toggle' : 'menu-toggle is-active'}
              onClick={() => navBarIsClose ? dispatch(toggleNavBar(false)) : dispatch(toggleNavBar(true))}
            >Menu</button>
        </div>
        <div
          id="main-side-nav"
          className={navBarIsClose ? 'nav-menus' : 'nav-menus open'}
          >
            <div>
              <Link to="/info" onClick={() => dispatch(toggleNavBar(true))}>온라인 갤러리 소개</Link>
            </div>
            <div>
              <Link to="/exhibition" onClick={() => dispatch(toggleNavBar(true))}>온라인 갤러리</Link>
            </div>
            <div>
              <Link to="/artist" onClick={() => dispatch(toggleNavBar(true))}>작가 소개</Link>
            </div>
            <div>
              <Link to="/notice" onClick={() => dispatch(toggleNavBar(true))}>공지사항</Link>
            </div>
        </div>
    </div>
  );

  function handleClickOutside (e) {
    const isMenu = e.target.classList.contains('menu-toggle');
    const isSideNav = e.target.classList.contains('nav-menus');

    if (!isMenu && !isSideNav) {
      if (!navBarIsClose) {
        dispatch(toggleNavBar(true));
      }
    }
  }
};

export default NavBar;
