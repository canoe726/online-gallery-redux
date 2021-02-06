import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import ArtistCard from './ArtistCard';

// 수정 필요
const HomeArtist = ({ data }) => {
  const cardWrapperRef = useRef();
  // const cardItemRef = useRef();
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <>
      <div className="card-wrapper" ref={cardWrapperRef}>
        {data.map((item, idx) =>
          <ArtistCard
            key={idx}
            data={item}
          ></ArtistCard>)}
      </div>
      <div
        className="prev hidden"
        onClick={() => scrollHorizontal(false)}
        ref={prevRef}
      >&#10094;</div>
      <div
        className="next"
        onClick={() => scrollHorizontal(true)}
        ref={nextRef}
      >&#10095;</div>
    </>
  );

  function scrollHorizontal (isRight) {
    const cardWrapper = cardWrapperRef.current;
    const cardItem = document.querySelector('.artist-introduction-wrapper .card-wrapper .card-item');
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
    const prev = prevRef.current;
    const next = nextRef.current;
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

HomeArtist.propTypes = {
  data: PropTypes.array
};

export default HomeArtist;
