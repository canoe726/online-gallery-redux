import React from 'react';
import PropTypes from 'prop-types';

class ArtworkDot extends React.Component {
  componentDidMount () {
    this.activeContentAnimation();
  }

  render () {
    const { slideIdx, length } = this.props;
    return (
      <div className="artwork-dot active">
        {
          (() => {
            const ret = [];
            for (let idx = 0; idx < length; idx++) {
              if (idx === slideIdx) {
                ret.push(<span key={idx} className="dot active"></span>);
              } else {
                ret.push(<span key={idx} className="dot"></span>);
              }
            }
            return ret;
          })()
        }
      </div>
    );
  }

  activeContentAnimation () {
    const backgroundWrapper = document.querySelector('.artwork-dot');
    setTimeout(() => {
      backgroundWrapper.classList.remove('active');
    }, 500);
  }
}

ArtworkDot.propTypes = {
  slideIdx: PropTypes.number,
  length: PropTypes.number
};

export default ArtworkDot;
