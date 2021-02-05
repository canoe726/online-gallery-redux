import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { lazyLoad } from '../../../lib/lazyLoading';

const ArtistCard = ({ history, data }) => {
  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div
      className="card-item"
      onClick={() => history.push(`/artist/${data.artistId}`)}
      >
      <img className="cover-img lazy" data-src={data.profileImage}></img>
      <div className="caption-wrapper">
          <div className="caption-text title">{data.nickname}</div>
          <div className="caption-text">{data.introduction}</div>
          <div className="caption-text">{data.note}</div>
      </div>
    </div>
  );
};

ArtistCard.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  data: PropTypes.object
};

export default withRouter(ArtistCard);
