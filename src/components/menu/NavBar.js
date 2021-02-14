import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

NavBar.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  navBarIsClose: PropTypes.bool,
  toggleNavBar: PropTypes.func
};

function NavBar ({ history, navBarIsClose, toggleNavBar }) {
  const dispatch = useDispatch();
  const infoItem = useRef();
  const exhibitionItem = useRef();
  const artistItem = useRef();
  const noticeItem = useRef();

  useEffect(() => {
    boldNavBarItem();
  }, [boldNavBarItem]);

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
            <div className="info">
              <Link ref={infoItem} to="/info" onClick={() => dispatch(toggleNavBar(true))}>온라인 갤러리 소개</Link>
            </div>
            <div>
              <Link ref={exhibitionItem} to="/exhibition" onClick={() => dispatch(toggleNavBar(true))}>온라인 갤러리</Link>
            </div>
            <div>
              <Link ref={artistItem} to="/artist" onClick={() => dispatch(toggleNavBar(true))}>작가 소개</Link>
            </div>
            <div>
              <Link ref={noticeItem} to="/notice" onClick={() => dispatch(toggleNavBar(true))}>공지사항</Link>
            </div>
        </div>
    </div>
  );

  function boldNavBarItem () {
    const paths = history.location.pathname.split('/');

    infoItem.current.style.color = '';
    exhibitionItem.current.style.color = '';
    artistItem.current.style.color = '';
    noticeItem.current.style.color = '';

    switch (paths[1]) {
      case 'info':
        infoItem.current.style.color = 'white';
        break;
      case 'exhibition':
        exhibitionItem.current.style.color = 'white';
        break;
      case 'artist':
        artistItem.current.style.color = 'white';
        break;
      case 'notice':
        noticeItem.current.style.color = 'white';
        break;
      default:
        break;
    }
  }

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

export default withRouter(NavBar);
