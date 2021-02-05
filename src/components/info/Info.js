import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import '../../stylesheets/info/info.scss';

import SliderItem from './SliderItem';
import { setFullPage } from '../../lib/fullPage';

const Info = ({ notice, backgroundImages }) => {
  console.log(backgroundImages);
  useEffect(() => {
    window.addEventListener('wheel', setFullPage);
    // mobile wheel
    window.addEventListener('touchmove', setFullPage);

    return () => {
      window.removeEventListener('wheel', setFullPage);
      // mobile wheel
      window.removeEventListener('touchmove', setFullPage);
    };
  }, [setFullPage]);

  return (
    <div className="info-wrapper">
      <div id="hero-slider" className="hero-slider load-next">
          {backgroundImages.map((image, idx) =>
            <SliderItem
              key={idx}
              idx={idx}
              length={backgroundImages.length}
              notice={notice[idx]}
              backgroundImage={image}
            ></SliderItem>)
          }
      </div>
    </div>
  );
};

Info.propTypes = {
  notice: PropTypes.array,
  backgroundImages: PropTypes.array
};

export default Info;
