import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.checkCurrentUrl();
  }

  componentDidUpdate () {
    this.checkCurrentUrl();
  }

  render () {
    return (
      <div className="search-wrapper">
        <label className={this.isSearch ? 'search' : 'search hidden'} htmlFor="input_search">
          <input id="input_search" type="text"></input>
        </label>
      </div>
    );
  }

  checkCurrentUrl () {
    console.log('search update');
    const pathname = window.location.pathname;
    const validPaths = ['/exhibition', '/artist'];
    const result = validPaths.filter(path => path === pathname);
    if (result.length > 0) {
      this.isSearch = true;
    } else {
      this.isSearch = false;
    }
  }
}

export default Search;
