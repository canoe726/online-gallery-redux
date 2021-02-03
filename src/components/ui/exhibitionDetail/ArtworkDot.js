import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ArtworkDot = ({ slideIdx, length }) => {
  useEffect(() => {
    activeContentAnimation();
  }, []);

  return (
    <div className="artwork-dot active">
      {
        (() => {
          const ret = [];
          for (let idx = 0; idx < length; idx++) {
            if (idx === slideIdx) {
              ret.push(<span key={idx} className="dot active" onClick={(e) => slideItem(e, idx, length)}></span>);
            } else {
              ret.push(<span key={idx} className="dot" onClick={(e) => slideItem(e, idx, length)}></span>);
            }
          }
          return ret;
        })()
      }
    </div>
  );

  function activeContentAnimation () {
    const backgroundWrapper = document.querySelector('.artwork-dot');
    setTimeout(() => {
      backgroundWrapper.classList.remove('active');
    }, 500);
  }

  function slideItem (e, idx, length) {
    console.log(e, idx, length);
  }
};

ArtworkDot.propTypes = {
  slideIdx: PropTypes.number,
  length: PropTypes.number
};

export default ArtworkDot;
