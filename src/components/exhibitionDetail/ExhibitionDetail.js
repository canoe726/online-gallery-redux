import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import '../../stylesheets/exhibitionDetail/exhibitionDetail.scss';

import ExhibitionDetailItem from './ExhibitionDetailItem';
import ArtworkDot from './ArtworkDot';
import ModalWrapper from './ModalWrapper';
import { lazyLoad } from '../../lib/lazyLoading';
import { useDebounce } from '../../lib/useDebounce';

const ExhibitionDetail = ({
  data,
  slideIdx,
  modalActive,
  changeSlideIdx,
  toggleModal
}) => {
  const exhibitionDetailWrapperRef = useRef();
  const prevRef = useRef();
  const nextRef = useRef();
  const retryRef = useRef();

  const dispatch = useDispatch();

  const [debouncer, setDebouncer] = useState({ move: false, isScrollUp: null });
  useDebounce(wheelChangeExhibition, 300, [debouncer]);

  useEffect(() => {
    lazyLoad();

    return () => {
      dispatch(toggleModal(0));
      dispatch(changeSlideIdx(0));
    };
  }, [lazyLoad]);

  return (
    <div
      className="exhibition-detail-wrapper load-next"
      ref={exhibitionDetailWrapperRef}
    >
      {data.map((item, idx) =>
        <div className={
          idx === 0
            ? 'hero-section active-slide'
            : 'hero-section'}
          key={idx}
        >
          <ExhibitionDetailItem
            data={item}
            toggleModal={toggleModal}
            whenWheel={whenWheel}
          ></ExhibitionDetailItem>
        </div>
      )}

      <ArtworkDot
        slideIdx={slideIdx}
        length={data.length}
        changeSlideIdx={changeSlideIdx}
        buttonToggle={buttonToggle}
        exhibitionDetailWrapperRef={exhibitionDetailWrapperRef}
      ></ArtworkDot>

      <ModalWrapper
        modalActive={modalActive}
        data={data[slideIdx]}
        toggleModal={toggleModal}
      ></ModalWrapper>

      <div className="prev hidden" onClick={() => changeSlide(-1)} ref={prevRef}>&#10094;</div>
      <div className={data.length !== 1 ? 'next' : 'next hidden'} onClick={() => changeSlide(1)} ref={nextRef}>&#10095;</div>
      <div className="retry hidden" ref={retryRef} onClick={rollbackSlide}>다시보기</div>
    </div>
  );

  function rollbackSlide () {
    retryRef.current.classList.add('hidden');

    const wrapper = exhibitionDetailWrapperRef.current;
    const element = wrapper.querySelectorAll('.hero-section');

    for (let i = 0; i < data.length; i++) {
      element[i].classList.remove('hide-slide');
      element[i].classList.remove('active-slide');
    }
    element[0].classList.add('active-slide');
    buttonToggle(0);
    dispatch(changeSlideIdx(0));
  }

  function whenWheel (e) {
    const wheelDir = e.deltaY;
    const isScrollUp = wheelDir < 0;
    if (debouncer.move === false) {
      setDebouncer({ move: true, isScrollUp: isScrollUp });
    } else {
      setDebouncer({ move: false, isScrollUp: isScrollUp });
    }
  }

  function changeSlide (direction) {
    const slideIdxTemp = slideIdx + direction;
    const wrapper = exhibitionDetailWrapperRef.current;
    const element = wrapper.querySelectorAll('.hero-section');

    buttonToggle(slideIdxTemp);
    if (slideIdx === data.length - 1) {
      if (!retryRef.current.classList.contains('hidden')) {
        retryRef.current.classList.add('hidden');
        return -1;
      }
    }

    if (slideIdxTemp >= data.length) {
      retryRef.current.classList.remove('hidden');
      nextRef.current.classList.add('hidden');
      return -1;
    }

    if (direction < 0) {
      element[slideIdxTemp].classList.remove('hide-slide');
      element[slideIdx].classList.remove('active-slide');
    } else {
      element[slideIdx].classList.add('hide-slide');
      element[slideIdxTemp].classList.add('active-slide');
    }

    dispatch(changeSlideIdx(slideIdxTemp));
  }

  function buttonToggle (slideIdxTemp) {
    if (slideIdxTemp === 0) {
      prevRef.current.classList.add('hidden');
      nextRef.current.classList.remove('hidden');
    } else if (slideIdxTemp === data.length - 1) {
      prevRef.current.classList.remove('hidden');
      nextRef.current.classList.remove('hidden');
    } else {
      prevRef.current.classList.remove('hidden');
      nextRef.current.classList.remove('hidden');
    }
  }

  function wheelChangeExhibition () {
    if (debouncer.isScrollUp === null) return;

    // 이전 전시
    if (!debouncer.isScrollUp) {
      changeSlide(-1);
    // 다음 전시
    } else {
      changeSlide(1);
    }
  }
};

ExhibitionDetail.propTypes = {
  data: PropTypes.array,
  slideIdx: PropTypes.number,
  modalActive: PropTypes.number,
  changeSlideIdx: PropTypes.func,
  toggleModal: PropTypes.func
};

export default ExhibitionDetail;
