import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

ArtworkDot.propTypes = {
  slideIdx: PropTypes.number,
  length: PropTypes.number,
  changeSlideIdx: PropTypes.func,
  buttonToggle: PropTypes.func,
  exhibitionDetailWrapperRef: PropTypes.object
};

function ArtworkDot ({
  slideIdx,
  length,
  changeSlideIdx,
  buttonToggle,
  exhibitionDetailWrapperRef
}) {
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
      const wrapper = exhibitionDetailWrapperRef.current;
      const element = wrapper.querySelectorAll('.hero-section');
      // next animation
      if (slideIdx < idx) {
        for (let i = 0; i < idx - slideIdx; i++) {
          element[slideIdx + i].classList.add('hide-slide');
          element[slideIdx + i + 1].classList.add('active-slide');
        }
      // prev animation
      } else {
        for (let i = 0; i < slideIdx - idx; i++) {
          element[slideIdx - i - 1].classList.remove('hide-slide');
          element[slideIdx - i].classList.remove('active-slide');
        }
      }
      buttonToggle(idx);
      dispatch(changeSlideIdx(idx));
    }
  }
};

export default ArtworkDot;
