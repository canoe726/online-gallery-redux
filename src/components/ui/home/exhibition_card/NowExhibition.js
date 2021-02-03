import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ExhibitionCard from './ExhibitionCard';
import { ElementLoadingContainer } from '../../../../containers/loadingContainers';

const NowExhibition = ({ exhibition, initHomeExhibition }) => {
  useEffect(() => {
    initHomeExhibition();
  }, []);

  return (
    <div className="now-exhibition-wrapper">
      <div className="title">진행중 전시</div>
      <div className="card-wrapper">
        {exhibition.length > 0
          ? exhibition.map((item, idx) =>
            <ExhibitionCard
              key={idx}
              data={item}
            ></ExhibitionCard>)
          : <ElementLoadingContainer></ElementLoadingContainer>}
      </div>
      <div className="prev hidden" onClick={() => scrollHorizontal(false)}>&#10094;</div>
      <div className="next" onClick={() => scrollHorizontal(true)}>&#10095;</div>
    </div>
  );

  function scrollHorizontal (isRight) {
    const cardWrapper = document.querySelector('.now-exhibition-wrapper .card-wrapper');
    const cardItem = document.querySelector('.now-exhibition-wrapper .card-wrapper .card-item');
    const scrollWidth = cardWrapper.scrollWidth - cardWrapper.clientWidth;
    const cardItemWidth = cardItem.clientWidth * 2;

    let afterPos = cardWrapper.scrollLeft;
    if (isRight) {
      afterPos += cardItemWidth;
      if (afterPos >= scrollWidth) afterPos = scrollWidth;

      cardWrapper.scrollLeft = afterPos;
    } else {
      afterPos -= cardItemWidth;
      if (afterPos < 0) afterPos = 0;

      cardWrapper.scrollLeft = afterPos;
    }

    if (afterPos === 0) {
      toggleSlideBtn(true, 'prev');
    } else {
      toggleSlideBtn(false, 'prev');
    }

    if (afterPos === scrollWidth) {
      toggleSlideBtn(true, 'next');
    } else {
      toggleSlideBtn(false, 'next');
    }
  }

  function toggleSlideBtn (activeHide, dir) {
    const prev = document.querySelector('.now-exhibition-wrapper .prev');
    const next = document.querySelector('.now-exhibition-wrapper .next');
    if (activeHide) {
      if (dir === 'prev') {
        prev.classList.add('hidden');
      } else {
        next.classList.add('hidden');
      }
    } else {
      if (dir === 'prev') {
        prev.classList.remove('hidden');
      } else {
        next.classList.remove('hidden');
      }
    }
  }
};

NowExhibition.propTypes = {
  exhibition: PropTypes.array,
  initHomeExhibition: PropTypes.func
};

export default NowExhibition;
