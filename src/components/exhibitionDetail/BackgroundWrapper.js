import React from 'react';
import PropTypes from 'prop-types';

import { onlineGalleryApiConstants as API } from '../../api/onlineGalleryApiConstants';

const BackgroundWrapper = ({ data, whenWheel }) => {
  console.log(data);
  return (
    <div className="background-wrapper"
      onWheel={whenWheel}
    >
      {data.type === 'IMAGE'
        ? <img className="img lazy" data-src={API.ROOT_IMG + data.value} alt={'background-img-item'}></img>
        : data.type === 'COLOR'
          ? <div className="color"
              style={{ backgroundColor: data.value }}
            ></div>
          : data.type === 'VIDEO'
            ? <video
                className="video play lazy"
                data-src={API.ROOT_IMG + data.value}
                alt={'background-img-item'}
                autoPlay={true}
                muted={true}
                onClick={(e) => toggleVideo(e)}
                onEnded={(e) => whenEnded(e)}
                ></video>
            : '잘못된 타입 입니다.'}
    </div>
  );

  function toggleVideo (e) {
    const target = e.target;
    if (target.classList.contains('ended')) {
      target.classList.remove('ended');
      target.classList.add('play');
      target.play();
      return;
    }

    if (target.classList.contains('play')) {
      target.classList.remove('play');
      target.pause();
    } else {
      target.classList.add('play');
      target.play();
    }
  }

  function whenEnded (e) {
    const target = e.target;
    target.classList.remove('play');
    target.classList.add('ended');
  }
};

BackgroundWrapper.propTypes = {
  data: PropTypes.object,
  whenWheel: PropTypes.func
};

export default BackgroundWrapper;
