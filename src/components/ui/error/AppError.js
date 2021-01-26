import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import '../../../stylesheets/error/notFound.scss';

const AppError = ({ history, backgroundImage }) => {
  return (
    <div className="not-found-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="not-found-page-wrapper">
            <div className="error-name-big">404</div>
            <div className="error-name-small">Not Found</div>
            <div className="error-message">유효하지 않은 페이지 입니다.</div>
            <div className="link" onClick={goIndex}>홈으로 이동</div>
        </div>
    </div>
  );

  function goIndex () {
    history.replace('/');
  }
};

AppError.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  backgroundImage: PropTypes.string
};

export default AppError;
