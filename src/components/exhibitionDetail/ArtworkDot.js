import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ArtworkDot = ({ slideIdx, length, changeSlideIdx, scrollUpAnimation, scrollDownAnimation }) => {
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
              ret.push(<span key={idx} className="dot active" onClick={() => slideItem(idx, length)}></span>);
            } else {
              ret.push(<span key={idx} className="dot" onClick={() => slideItem(idx, length)}></span>);
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

  function slideItem (idx, length) {
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
};

ArtworkDot.propTypes = {
  slideIdx: PropTypes.number,
  length: PropTypes.number,
  changeSlideIdx: PropTypes.func,
  scrollUpAnimation: PropTypes.func,
  scrollDownAnimation: PropTypes.func
};

export default ArtworkDot;
