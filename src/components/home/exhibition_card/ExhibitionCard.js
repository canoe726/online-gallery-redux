import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { lazyLoad } from '../../../lib/lazyLoading';

const ExhibitionCard = ({ history, data }) => {
  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div
      className="card-item"
      onClick={() => history.push(`/exhibition/${data.exhibitionId}`)}
      >
      <img className="cover-img lazy" data-src={data.posterImage}></img>
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
