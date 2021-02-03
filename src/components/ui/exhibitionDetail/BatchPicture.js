import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const BatchPicture = ({ slideIdx, modalActive, data, toggleModal }) => {
  const batchPictureRef = useRef();

  useEffect(() => {
    activeContentAnimation();
  }, []);

  return (
    <div
      className="batch-picture load-next active"
      onClick={activeModal}
      style={data.length > 0
        ? {
            width: `${data[slideIdx].exhibitionItem.originalHorizSize}%`,
            height: `${data[slideIdx].exhibitionItem.originalVertSize}%`
          }
        : {}}
      ref={batchPictureRef}
    >
      {data.length > 0
        ? data.map((item, idx) =>
          <BatchItem
            key={idx}
            idx={idx}
            length={data.length}
            data={item}
          ></BatchItem>)
        : '불러오는중...'}
    </div>
  );

  function activeModal () {
    // className of modalActive - 0 : '', 1 : sketch, 2 : sketch out
    toggleModal(1);
  }

  function activeContentAnimation () {
    const batchPicture = batchPictureRef.current;
    setTimeout(() => {
      batchPicture.classList.remove('active');
    }, 500);
  }
};

const BatchItem = ({ idx, length, data }) => {
  return (
    <div
      className={
        idx === 0
          ? 'hero-section active'
          : idx === length - 1
            ? 'hero-section prev'
            : 'hero-section'}
      >
      <img
        className="img lazy"
        data-src={data.exhibitionItem.image}
        alt={`batch-img-item-${idx + 1}`}
      ></img>
    </div>
  );
};

BatchPicture.propTypes = {
  slideIdx: PropTypes.number,
  modalActive: PropTypes.number,
  data: PropTypes.array,
  toggleModal: PropTypes.func
};

BatchItem.propTypes = {
  idx: PropTypes.number,
  length: PropTypes.number,
  data: PropTypes.object
};

export default BatchPicture;
