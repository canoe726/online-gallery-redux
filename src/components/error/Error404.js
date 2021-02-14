import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import '../../stylesheets/error/notFound.scss';

Error404.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};

function Error404 ({ history }) {
  const backgroundImage = '/samples/artwork_d_6.jpg';
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

export default Error404;
