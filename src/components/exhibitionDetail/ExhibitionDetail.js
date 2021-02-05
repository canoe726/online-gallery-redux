import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import '../../stylesheets/exhibitionDetail/exhibitionDetail.scss';

import BackgroundMusic from './BackgroundMusic';
import BackgroundWrapper from './BackgroundWrapper';
import BatchPicture from './BatchPicture';
import BatchNote from './BatchNote';
import ArtworkDot from './ArtworkDot';
import ModalWrapper from './ModalWrapper';
import { lazyLoad } from '../../lib/lazyLoading';

const ExhibitionDetail = ({
  data,
  slideIdx,
  modalActive,
  changeSlideIdx,
  toggleModal
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    lazyLoad();

    return () => {
      dispatch(toggleModal(0));
      dispatch(changeSlideIdx(0));
    };
  }, []);

  useEffect(() => {
    lazyLoad();
  });

  return (
    <div className="exhibition-detail-wrapper">
      {/* <div
        className="exhibition-poster"
        onClick={posterSlideUp}
      >
        <img className="poster-img" src="/samples/galleryPoster1.jpg"></img>
      </div> */}
      <BackgroundMusic
        data={data[slideIdx].exhibitionItemBackground}
      ></BackgroundMusic>

      <BackgroundWrapper
        slideIdx={slideIdx}
        changeSlideIdx={changeSlideIdx}
        data={data}
      ></BackgroundWrapper>

      <BatchPicture
        slideIdx={slideIdx}
        data={data}
        toggleModal={toggleModal}
      ></BatchPicture>

      <BatchNote
        data={data[slideIdx]}
      ></BatchNote>

      <ArtworkDot
        slideIdx={slideIdx}
        length={data.length}
      ></ArtworkDot>

      <ModalWrapper
        modalActive={modalActive}
        data={data[slideIdx]}
        toggleModal={toggleModal}
      ></ModalWrapper>
    </div>
  );

  // function posterSlideUp (e) {
  //   const target = e.target;
  //   target.parentNode.classList.add('active');
  // }
};

ExhibitionDetail.propTypes = {
  data: PropTypes.array,
  slideIdx: PropTypes.number,
  modalActive: PropTypes.number,
  changeSlideIdx: PropTypes.func,
  toggleModal: PropTypes.func
};

export default ExhibitionDetail;
