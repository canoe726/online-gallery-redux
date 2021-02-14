import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

Search.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  searchIsActive: PropTypes.bool,
  toggleIsSearch: PropTypes.func,
  getSearchData: PropTypes.func,
  initSearchData: PropTypes.func,
  initSearchListData: PropTypes.func
};

function Search ({
  history,
  searchIsActive,
  toggleIsSearch,
  getSearchData,
  initSearchData,
  initSearchListData
}) {
  const dispatch = useDispatch();
  const formFieldRef = useRef();

  useEffect(() => {
    changeIsSearch();
    history.listen(changeIsSearch);
  }, []);

  return (
    <div className={searchIsActive ? 'search-wrapper' : 'search-wrapper hidden'}>
      <div className="form-group field">
        <input
          type="input"
          className="form-field hidden"
          placeholder="작품 및 작가 검색"
          name="search"
          id="name"
          required
          ref={formFieldRef}
          />
      </div>
      <i
        className="fas fa-search"
        onClick={toggleInput}
      ></i>
    </div>
  );

  function toggleInput () {
    if (formFieldRef.current.classList.contains('hidden')) {
      formFieldRef.current.classList.remove('hidden');
      return;
    }

    if (formFieldRef.current.value.length > 0) {
      dispatch(initSearchData());
      dispatch(initSearchListData());

      const url = history.location.pathname;
      const page = url.split('/')[1];
      const value = formFieldRef.current.value;

      let curInput = null;
      const paths = window.location.pathname.split('/');
      if (paths.length >= 3 && paths[2] === 'search') {
        curInput = paths[3];
      }
      const decodedcurInput = decodeURI(decodeURIComponent(curInput));
      if (decodedcurInput === value) {
        console.log('refresh');
        location.reload(true);
      } else {
        history.push(`/${page}/search/${value}`);
        dispatch(getSearchData({ value: value, url: url }));
      }
    }
    formFieldRef.current.value = '';
    formFieldRef.current.classList.add('hidden');
  }

  function changeIsSearch () {
    formFieldRef.current.classList.add('hidden');

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

export default withRouter(Search);
