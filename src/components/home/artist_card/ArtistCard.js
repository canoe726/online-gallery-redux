import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { lazyLoad } from '../../../lib/lazyLoading';

// import { onlineGalleryApiConstants as API } from '../../../api/onlineGalleryApiConstants';
// API.ROOT_IMG +

const ArtistCard = ({ data, goNextPage }) => {
  const url = `/artist/${data.artistId}`;
  const dispatch = useDispatch();

  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div
      className="card-item"
      onClick={() => dispatch(goNextPage(url))}
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
  data: PropTypes.object,
  goNextPage: PropTypes.func
};

export default ArtistCard;
