import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { lazyLoad } from '../../../lib/lazyLoading';

// import { onlineGalleryApiConstants as API } from '../../../api/onlineGalleryApiConstants';
// API.ROOT_IMG +

const ExhibitionCard = ({ data, goNextPage }) => {
  const url = `/exhibition/${data.exhibitionId}`;
  const dispatch = useDispatch();

  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div
      className="card-item"
      onClick={() => dispatch(goNextPage(url))}
      >
      <img className="cover-img lazy" data-src={data.posterImage}></img>
      <div className="caption-wrapper">
          <div className="caption-text">{data.title}</div>
      </div>
    </div>
  );
};

ExhibitionCard.propTypes = {
  data: PropTypes.object,
  goNextPage: PropTypes.func
};

export default ExhibitionCard;
