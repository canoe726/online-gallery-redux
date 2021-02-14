import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import SkeletonImage from '../common/skeletonImage';

BatchPicture.propTypes = {
  data: PropTypes.object,
  toggleModal: PropTypes.func
};

function BatchPicture ({ data, toggleModal }) {
  const dispatch = useDispatch();
  const skletonRef = useRef();

  return (
    <div
      className="batch-picture"
      onClick={activeModal}
      style={{
        width: `${data.originalHorizSize / 5}px`,
        height: `${data.originalVertSize / 5}px`
      }}
    >
      <SkeletonImage ref={skletonRef}></SkeletonImage>
      {data.type === 'IMAGE' &&
        <img
          className="img lazy"
          data-src={data.image}
          alt={'batch-img-item'}
          onLoad={(e) => onLoadedElement(e, 'image')}
        ></img>}
      {data.type === 'VIDEO' &&
        <video
          className="video lazy"
          data-src={data.image}
          alt={'batch-img-item'}
          muted={true}
          onLoadedData={(e) => onLoadedElement(e, 'video')}
        ></video>}
    </div>
  );

  function activeModal () {
    // className of modalActive - 0 : '', 1 : sketch, 2 : sketch out
    dispatch(toggleModal(1));
  }

  function onLoadedElement (e, type) {
    skletonRef.current.style.display = 'none';
    if (type === 'video') {
      const target = e.target;
      target.play();
    }
  }
};

export default BatchPicture;
