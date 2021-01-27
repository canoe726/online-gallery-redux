import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    window.addEventListener('click', this.handleClickOutside);
  }

  render () {
    return (
      <div className="nav-bar">
          <div className="nav-menu-btn">
              <button className={this.props.isClose ? 'menu-toggle' : 'menu-toggle is-active'} onClick={this.props.toggleNavBar}>Menu</button>
          </div>
          <div id="main-side-nav" className={this.props.isClose ? 'nav-menus' : 'nav-menus open'}>
              <Link to="/info" onClick={() => console.log('click')}>
                <div>온라인 갤러리 소개</div>
              </Link>
              <Link to="/exhibition" onClick={() => console.log('click')}>
                < div>온라인 갤러리</div>
              </Link>
              <Link to="/artist">
                <div>작가 소개</div>
              </Link>
              <Link to="/notice">
                <div>공지사항</div>
              </Link>
          </div>
      </div>
    );
  }

  handleClickOutside (e) {
    const isMenu = e.target.classList.contains('menu-toggle');
    const isSideNav = e.target.classList.contains('nav-menus');
    if (!isMenu && !isSideNav && !this.props.isClose) {
      this.props.toggleNavBar();
    }
  }
};

NavBar.propTypes = {
  isClose: PropTypes.bool,
  toggleNavBar: PropTypes.func
};

export default NavBar;
