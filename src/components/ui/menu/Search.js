import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

const Search = ({ history, isSearch, toggleIsSearch }) => {
  let debouncer = null;
  const formField = useRef();
  const formLabel = useRef();

  useEffect(() => {
    changeIsSearch();
    history.listen(changeIsSearch);
  }, []);

  return (
    <div className={isSearch ? 'search-wrapper' : 'search-wrapper hidden'}>
      <div className="form-group field">
        <input
          type="input"
          className="form-field active"
          placeholder="input"
          name="search"
          id="name"
          required
          onInput={whenTypeInput}
          ref={formField}
          />
        <label
          htmlFor="name"
          className="form-label active"
          ref={formLabel}
        >작품 및 작가 검색</label>
      </div>
      <i
        className="fas fa-search"
        onClick={toggleInput}
      ></i>
    </div>
  );

  function whenTypeInput () {
    if (debouncer) {
      clearTimeout(debouncer);
    }
    debouncer = setTimeout(() => {
      const value = formField.current.value;
      // 자동으로 데이터 갱신 처리
      console.log('자동 검색 : ', value);
    }, 400);
  }

  function toggleInput () {
    if (formField.current.value.length > 0) {
      const value = formField.current.value;
      console.log('검색 : ', value);
    }

    formField.current.classList.toggle('active');
    formLabel.current.classList.toggle('active');

    formField.current.value = '';
  }

  function changeIsSearch () {
    formField.current.classList.remove('active');
    formLabel.current.classList.remove('active');

    const searchUrl = ['/exhibition', '/artist'];
    let activeSearch = false;
    searchUrl.forEach(url => {
      if (url === location.pathname) {
        activeSearch = true;
      }
    });
    toggleIsSearch(activeSearch);
  }
};

Search.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  isSearch: PropTypes.bool,
  toggleIsSearch: PropTypes.func
};

export default withRouter(Search);
