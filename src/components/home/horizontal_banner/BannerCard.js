import React from 'react';
import PropTypes from 'prop-types';

import { onlineGalleryApiConstants as API } from '../../../api/onlineGalleryApiConstants';

const BannerCard = ({ data, isShow }) => {
  return (
    <div className="slide-card" style={isShow ? { display: 'block' } : { display: 'none' }}>
      <img className="card-img" src={API.ROOT_IMG + data.posterImage} alt="banner-card-item"></img>
    </div>
  );
};

BannerCard.propTypes = {
  data: PropTypes.object,
  isShow: PropTypes.bool
};

export default BannerCard;
