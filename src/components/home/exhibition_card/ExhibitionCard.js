import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { lazyLoad } from '../../../lib/lazyLoading';

import { onlineGalleryApiConstants as API } from '../../../api/onlineGalleryApiConstants';

const ExhibitionCard = ({ history, data }) => {
  const url = `/exhibition/${data.exhibitionId}`;

  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div
      className="card-item"
      onClick={() => history.push(url)}
    >
      <img className="cover-img lazy" data-src={API.ROOT_IMG + data.posterImage}></img>
      <div className="caption-wrapper">
          <div className="caption-text">{data.title}</div>
      </div>
    </div>
  );
};

ExhibitionCard.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  data: PropTypes.object
};

export default withRouter(ExhibitionCard);
