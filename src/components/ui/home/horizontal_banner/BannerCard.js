import React from 'react';
import PropTypes from 'prop-types';

// import OG_API from '../../../../api/onlineGalleryApiConstants';

const BannerCard = ({ data, isShow }) => {
  return (
    <div className="slide-card" style={isShow ? { display: 'block' } : { display: 'none' }}>
      <img className="card-img" src={data.posterImage} alt="banner-card-item"></img>
    </div>
  );
};

BannerCard.propTypes = {
  data: PropTypes.object,
  isShow: PropTypes.bool
};

export default BannerCard;
