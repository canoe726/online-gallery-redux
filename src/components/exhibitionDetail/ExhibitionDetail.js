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
  }, []);

  useEffect(() => {
    lazyLoad();
  });

  return (
    <div
      className="exhibition-detail-wrapper load-next"
      ref={exhibitionDetailWrapperRef}
    >
      {data.map((item, idx) =>
        <div className={
          idx === 0
            ? 'hero-section active-slide'
            : idx === data.length - 1
              ? data.length > 2
                  ? 'hero-section prev-slide'
                  : 'hero-section'
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
        exhibitionDetailWrapperRef={exhibitionDetailWrapperRef}
      ></ArtworkDot>

      <ModalWrapper
        modalActive={modalActive}
        data={data[slideIdx]}
        toggleModal={toggleModal}
      ></ModalWrapper>

      <div className="prev hidden" onClick={() => changeSlide(-1)} ref={prevRef}>&#10094;</div>
      <div className={data.length !== 1 ? 'next' : 'next hidden'} onClick={() => changeSlide(1)} ref={nextRef}>&#10095;</div>
      <div className="retry hidden" ref={retryRef}>다시보기</div>
    </div>
  );

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
    if (slideIdxTemp < 0 || slideIdxTemp >= data.length) return -1;

    if (direction > 0) {
      scrollDownAnimation(slideIdx, data.length);
    } else {
      scrollUpAnimation(slideIdx, data.length);
    }

    console.log('slideIdxTemp : ', slideIdxTemp);
    if (slideIdxTemp === 0) {
      prevRef.current.classList.add('hidden');
      nextRef.current.classList.remove('hidden');
    } else if (slideIdxTemp === data.length - 1) {
      // retryRef.current.classList.remove('hidden');
      prevRef.current.classList.remove('hidden');
      nextRef.current.classList.add('hidden');
    } else {
      // if (!retryRef.current.classList.contains('hidden')) {
      //   retryRef.current.classList.add('hidden');
      // }
      prevRef.current.classList.remove('hidden');
      nextRef.current.classList.remove('hidden');
    }
    dispatch(changeSlideIdx(slideIdxTemp));
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

  function scrollUpAnimation (idx, length) {
    const wrapper = exhibitionDetailWrapperRef.current;
    const element = wrapper.querySelectorAll('.hero-section');

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

  function scrollDownAnimation (idx, length) {
    const wrapper = exhibitionDetailWrapperRef.current;
    const element = wrapper.querySelectorAll('.hero-section');

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

ExhibitionDetail.propTypes = {
  data: PropTypes.array,
  slideIdx: PropTypes.number,
  modalActive: PropTypes.number,
  changeSlideIdx: PropTypes.func,
  toggleModal: PropTypes.func
};

export default ExhibitionDetail;
