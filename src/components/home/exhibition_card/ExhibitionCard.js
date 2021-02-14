import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import SkeletonImage from '../../common/skeletonImage';
import lazyLoad from '../../../lib/lazyLoading';

ExhibitionCard.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  data: PropTypes.object.isRequired
};

function ExhibitionCard ({ history, data }) {
  const url = `/exhibition/${data.exhibitionId}`;
  const skletonRef = useRef();

  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div
      className="card-item"
      onClick={() => history.push(url)}
    >
      <SkeletonImage ref={skletonRef}></SkeletonImage>
      <img className="cover-img lazy"
        data-src={data.posterImage}
        onLoad={() => { skletonRef.current.style.display = 'none'; }}
      ></img>
      <div className="caption-wrapper">
          <div className="caption-text">{data.title}</div>
      </div>
    </div>
  );
};

export default withRouter(ExhibitionCard);
