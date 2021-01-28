import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/loading/elementLoading.scss';

class AppElementLoading extends React.Component {
  render () {
    const { loadingImage } = this.props;
    return (
      <div className="element-loading-wrapper">
        <img className="element-loading-img" src={loadingImage} alt="element-loading-image"></img>
      </div>
    );
  }
}

AppElementLoading.propTypes = {
  loadingImage: PropTypes.string
};

export default AppElementLoading;
