import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import SkeletonImage from '../../common/skeletonImage';
import lazyLoad from '../../../lib/lazyLoading';

ArtistCard.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  data: PropTypes.object.isRequired
};

function ArtistCard ({ history, data }) {
  const url = `/artist/${data.artistId}`;
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
        data-src={data.profileImage}
        onLoad={() => { skletonRef.current.style.display = 'none'; }}
      ></img>
      <div className="caption-wrapper">
          <div className="caption-text title">{data.nickname}</div>
          <div className="caption-text">{data.introduction}</div>
          <div className="caption-text">{data.note}</div>
      </div>
    </div>
  );
};

export default withRouter(ArtistCard);
