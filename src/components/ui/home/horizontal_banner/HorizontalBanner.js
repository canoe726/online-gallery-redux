import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import BannerCard from './BannerCard';
import { ElementLoadingContainer } from '../../../../containers/loadingContainers';

const HorizontalBanner = ({ banner, bannerIdx, initHomeBanner, changeHomeBannerIdx }) => {
  let homeBannerInterval = null;

  useEffect(() => {
    initHomeBanner();
  }, []);

  useEffect(() => {
    homeBannerInterval = setInterval(() => {
      changeSlide(1);
    }, 7000);

    return () => {
      clearInterval(homeBannerInterval);
    };
  });

  return (
    <div className="horizontal-banner">
      <div className="banner-card-wrapper">
        {banner.length > 0
          ? banner.map((item, idx) =>
            <BannerCard
              key={idx}
              data={item}
              isShow={idx === bannerIdx}
            ></BannerCard>)
          : <ElementLoadingContainer></ElementLoadingContainer>}
      </div>
      <div className="prev" onClick={() => changeSlide(-1)}>&#10094;</div>
      <div className="next" onClick={() => changeSlide(1)}>&#10095;</div>
      <div className="banner-dot">
        {banner.length > 0
          ? banner.map((item, idx) =>
            <span
              key={idx}
              className={idx === bannerIdx ? 'dot active' : 'dot'}
              onClick={() => dotChangeSlide(idx)}
            ></span>)
          : ''
        }
      </div>
    </div>
  );

  function dotChangeSlide (idx) {
    changeHomeBannerIdx(idx);
  }

  function changeSlide (plus) {
    const length = banner.length;
    let tempIdx = bannerIdx;
    tempIdx += plus;
    if (tempIdx < 0) {
      tempIdx = length - 1;
    } else if (tempIdx >= length) {
      tempIdx = 0;
    }
    changeHomeBannerIdx(tempIdx);
  }
};

HorizontalBanner.propTypes = {
  banner: PropTypes.array,
  bannerIdx: PropTypes.number,
  initHomeBanner: PropTypes.func,
  changeHomeBannerIdx: PropTypes.func
};

export default HorizontalBanner;
