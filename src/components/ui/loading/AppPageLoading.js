import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/loading/pageLoading.scss';

class AppPageLoading extends React.Component {
  render () {
    const { loadingImage } = this.props;
    return (
      <div className="page-loading-wrapper">
        <img className="page-loading-img" src={loadingImage} alt="page-loading-image"></img>
      </div>
    );
  }
}

AppPageLoading.propTypes = {
  loadingImage: PropTypes.string
};

export default AppPageLoading;
