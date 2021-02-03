import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/info/info.scss';

import SliderItem from './SliderItem';
import { PageLoadingContainer } from '../../../containers/loadingContainers';
import { setFullPage } from '../../util/fullPage';

const Info = ({ notice, backgroundImages, initInfoData }) => {
  useEffect(() => {
    window.addEventListener('wheel', setFullPage);
    // mobile wheel
    window.addEventListener('touchmove', setFullPage);
    initInfoData();

    return () => {
      window.removeEventListener('wheel', setFullPage);
      // mobile wheel
      window.removeEventListener('touchmove', setFullPage);
    };
  }, [setFullPage]);

  return (
    <div className="info-wrapper">
      <div id="hero-slider" className="hero-slider load-next">
          {backgroundImages.length > 0
            ? backgroundImages.map((image, idx) =>
              <SliderItem
                key={idx}
                idx={idx}
                length={backgroundImages.length}
                notice={notice}
                backgroundImage={image}
              ></SliderItem>)
            : <PageLoadingContainer></PageLoadingContainer>
          }
      </div>
    </div>
  );
};

Info.propTypes = {
  notice: PropTypes.string,
  backgroundImages: PropTypes.array,
  initInfoData: PropTypes.func
};

export default Info;
