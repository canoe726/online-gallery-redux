import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

const Search = ({ history, searchIsActive, toggleIsSearch, getSearchData, initSearchData, initArtistSearchList }) => {
  const dispatch = useDispatch();

  const formFieldRef = useRef();
  const formLabelRef = useRef();

  useEffect(() => {
    changeIsSearch();
    history.listen(changeIsSearch);
  }, []);

  return (
    <div className={searchIsActive ? 'search-wrapper' : 'search-wrapper hidden'}>
      <div className="form-group field">
        <input
          type="input"
          className="form-field active"
          placeholder="input"
          name="search"
          id="name"
          required
          ref={formFieldRef}
          />
        <label
          htmlFor="name"
          className="form-label active"
          ref={formLabelRef}
        >작품 및 작가 검색</label>
      </div>
      <i
        className="fas fa-search"
        onClick={toggleInput}
      ></i>
    </div>
  );

  function toggleInput () {
    if (!formFieldRef.current.classList.contains('active')) {
      formFieldRef.current.classList.add('active');
      formLabelRef.current.classList.add('active');
      return;
    }

    if (formFieldRef.current.value.length > 0) {
      const url = history.location.pathname;
      const page = url.split('/')[1];
      const value = formFieldRef.current.value;
      history.push(`/${page}/search/${value}`);
      dispatch(getSearchData({ value: value, url: url }));
    } else {
      dispatch(initSearchData());

      formFieldRef.current.classList.toggle('active');
      formLabelRef.current.classList.toggle('active');

      formFieldRef.current.value = '';
    }
  }

  function changeIsSearch () {
    formFieldRef.current.classList.remove('active');
    formLabelRef.current.classList.remove('active');

    const searchUrl = ['/exhibition', '/artist'];
    let activeSearch = false;
    searchUrl.forEach(url => {
      if (history.location.pathname.includes(url)) {
        activeSearch = true;
      }
    });
    dispatch(toggleIsSearch(activeSearch));
  }
};

Search.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  searchIsActive: PropTypes.bool,
  toggleIsSearch: PropTypes.func,
  getSearchData: PropTypes.func,
  initSearchData: PropTypes.func,
  initArtistSearchList: PropTypes.func
};

export default withRouter(Search);
