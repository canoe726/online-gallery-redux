import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import BannerCard from './BannerCard';

HorizontalBanner.propTypes = {
  data: PropTypes.array.isRequired,
  homeBannerIdx: PropTypes.number,
  changeHomeBannerIdx: PropTypes.func.isRequired
};

function HorizontalBanner ({ data, homeBannerIdx, changeHomeBannerIdx }) {
  const dispatch = useDispatch();

  useEffect(() => {
    homeBannerInterval = setInterval(() => {
      changeSlide(1);
    }, 7000);

    return () => {
      clearInterval(homeBannerInterval);
    };
  });

  return (
    <>
      <div className="banner-card-wrapper">
        {data.map((data, idx) =>
          <BannerCard
            key={idx}
            data={data}
            isShow={idx === homeBannerIdx}
          ></BannerCard>)}
      </div>
      <div className="prev" onClick={() => changeSlide(-1)}>&#10094;</div>
      <div className="next" onClick={() => changeSlide(1)}>&#10095;</div>
      <div className="banner-dot">
        {[...Array(data.length)].map((n, idx) =>
          <span
            key={idx}
            className={idx === homeBannerIdx ? 'dot active' : 'dot'}
            onClick={() => dotChangeSlide(idx)}
          ></span>)}
      </div>
    </>
  );

  function dotChangeSlide (idx) {
    dispatch(changeHomeBannerIdx(idx));
  }

  function changeSlide (plus) {
    const length = data.length;
    let tempIdx = homeBannerIdx;
    tempIdx += plus;
    if (tempIdx < 0) {
      tempIdx = length - 1;
    } else if (tempIdx >= length) {
      tempIdx = 0;
    }
    dispatch(changeHomeBannerIdx(tempIdx));
  }
};

let homeBannerInterval = null;

export default HorizontalBanner;
