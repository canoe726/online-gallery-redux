import React from 'react';
import PropTypes from 'prop-types';

BannerCard.propTypes = {
  data: PropTypes.object.isRequired,
  isShow: PropTypes.bool.isRequired
};

function BannerCard ({ data, isShow }) {
  return (
    <div className="slide-card" style={isShow ? { display: 'block' } : { display: 'none' }}>
      <img className="card-img" src={data.posterImage} alt="banner-card-item"></img>
    </div>
  );
};

export default BannerCard;
