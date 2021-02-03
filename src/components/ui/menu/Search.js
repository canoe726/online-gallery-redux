import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

const Search = ({ history, isSearch, toggleIsSearch }) => {
  let debouncer = null;

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
          name="name"
          id="name"
          required
          onInput={whenTypeInput}
          />
        <label htmlFor="name" className="form-label active">작품 및 작가 검색</label>
      </div>
      <i
        className="fas fa-search"
        onClick={toggleInput}
      ></i>
    </div>
  );

  function whenTypeInput (e) {
    if (debouncer) {
      clearTimeout(debouncer);
    }
    debouncer = setTimeout(() => {
      const value = e.target.value;
      // 자동으로 데이터 갱신 처리
      console.log('자동 검색 : ', value);
    }, 400);
  }

  function toggleInput () {
    const formField = document.querySelector('.form-field');
    if (formField.value.length > 0) {
      const value = formField.value;
      console.log('검색 : ', value);
    }

    formField.classList.toggle('active');

    const formLabel = document.querySelector('.form-label');
    formLabel.classList.toggle('active');

    formField.value = '';
  }

  function changeIsSearch () {
    const formField = document.querySelector('.form-field');
    formField.classList.remove('active');

    const formLabel = document.querySelector('.form-label');
    formLabel.classList.remove('active');

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
