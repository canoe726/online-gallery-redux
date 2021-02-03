import React from 'react';
import PropTypes from 'prop-types';

const BannerCard = ({ data, isShow }) => {
  return (
    <div className="slide-card" style={isShow ? { display: 'block' } : { display: 'none' }}>
      <img className="card-img" src={data.bannerImgPath} alt="banner-card-item"></img>
    </div>
  );
};

BannerCard.propTypes = {
  data: PropTypes.object,
  isShow: PropTypes.bool
};

export default BannerCard;
