import React from 'react';
import PropTypes from 'prop-types';

import '../../stylesheets/error/loadingError.scss';

const LoadingError = ({ error }) => {
  const backgroundImage = '/samples/artwork_d_8.jpg';
  return (
    <div className="loading-error-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="loading-error-page-wrapper">
            <div className="error-name-big">Loading Error</div>
            <div className="error-name-small">{error.message}</div>
            <div className="error-message">콘텐츠가 로딩 되지 않았습니다.</div>
        </div>
    </div>
  );
};

LoadingError.propTypes = {
  error: PropTypes.object
};

export default LoadingError;
