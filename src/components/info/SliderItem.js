import React from 'react';
import PropTypes from 'prop-types';

SliderItem.propTypes = {
  idx: PropTypes.number,
  length: PropTypes.number,
  notice: PropTypes.string,
  backgroundImage: PropTypes.string
};

function SliderItem ({ idx, length, notice, backgroundImage }) {
  return (
    <section className={
      idx === 0
        ? 'hero-slider-item active'
        : idx === (length - 1)
          ? 'hero-slider-item prev'
          : 'hero-slider-item'
      }>
      <div className="info-card">
        <img className="card-img" src={backgroundImage} alt={`info-card-item-${idx}`}></img>
        <div className="caption-wrapper">
          <div className="title">{notice}</div>
        </div>
      </div>
    </section>
  );
};

export default SliderItem;
