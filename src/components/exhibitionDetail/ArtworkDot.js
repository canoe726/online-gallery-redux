import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ArtworkDot = ({ slideIdx, length, changeSlideIdx, exhibitionDetailWrapperRef }) => {
  const artworkDotRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    activeContentAnimation();
  }, []);

  return (
    <div className="artwork-dot active" ref={artworkDotRef}>
      {
        (() => {
          const ret = [];
          for (let idx = 0; idx < length; idx++) {
            if (idx === slideIdx) {
              ret.push(<span key={idx} className="dot active" onClick={() => slideItem(idx)}></span>);
            } else {
              ret.push(<span key={idx} className="dot" onClick={() => slideItem(idx)}></span>);
            }
          }
          return ret;
        })()
      }
    </div>
  );

  function activeContentAnimation () {
    const artworkDot = artworkDotRef.current;
    setTimeout(() => {
      artworkDot.classList.remove('active');
    }, 500);
  }

  function slideItem (idx) {
    if (idx === slideIdx) {
      return -1;
    } else {
      // next animation
      if (slideIdx < idx) {
        let tempIdx = idx - 1;
        if (tempIdx < 0) tempIdx = length;
        scrollDownAnimation(tempIdx, length);
      // prev animation
      } else {
        let tempIdx = idx + 1;
        if (tempIdx >= length) tempIdx = 0;
        scrollUpAnimation(tempIdx, length);
      }
      dispatch(changeSlideIdx(idx));
    }
  }

  function scrollUpAnimation (idx, length) {
    const wrapper = exhibitionDetailWrapperRef.current;
    const element = wrapper.querySelectorAll('.hero-section');
    element.forEach(item => {
      item.classList.remove('prev-slide');
      item.classList.remove('active-slide');
    });

    let before = idx - 1;
    let next = idx + 1;

    wrapper.classList.add('load-prev');
    wrapper.classList.remove('load-next');

    if (before < 0) before = length - 1;
    if (next > length - 1) next = 0;

    element[next].classList.remove('prev-slide');
    element[next].classList.remove('active-slide');

    element[idx].classList.add('prev-slide');
    element[idx].classList.remove('active-slide');

    element[before].classList.add('active-slide');
    element[before].classList.remove('prev-slide');
  }

  function scrollDownAnimation (idx) {
    const wrapper = exhibitionDetailWrapperRef.current;
    const element = wrapper.querySelectorAll('.hero-section');
    element.forEach(item => {
      item.classList.remove('prev-slide');
      item.classList.remove('active-slide');
    });

    let before = idx - 1;
    let next = idx + 1;

    wrapper.classList.add('load-next');
    wrapper.classList.remove('load-prev');

    if (before < 0) before = length - 1;
    if (next > length - 1) next = 0;

    element[before].classList.remove('prev-slide');
    element[before].classList.remove('active-slide');

    element[idx].classList.add('prev-slide');
    element[idx].classList.remove('active-slide');

    element[next].classList.add('active-slide');
    element[next].classList.remove('prev-slide');
  }
};

ArtworkDot.propTypes = {
  slideIdx: PropTypes.number,
  length: PropTypes.number,
  changeSlideIdx: PropTypes.func,
  exhibitionDetailWrapperRef: PropTypes.object
};

export default ArtworkDot;
