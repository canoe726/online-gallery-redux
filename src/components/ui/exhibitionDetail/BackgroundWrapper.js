import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const BackgroundWrapper = ({ slideIdx, data, changeSlideIdx }) => {
  let throttler = null;

  useEffect(() => {
    activeContentAnimation();
  }, []);

  return (
    <div
      className="background-wrapper load-next active"
      onWheel={wheelChangeExhibition}
      onTouchMove={wheelChangeExhibition}
    >
      {data.length > 0
        ? data.map((item, idx) =>
            <BackgroundItem
              key={idx}
              idx={idx}
              length={data.length}
              data={item}
            ></BackgroundItem>)
        : '불러오는중...'}
    </div>
  );

  function activeContentAnimation () {
    const backgroundWrapper = document.querySelector('.background-wrapper');
    setTimeout(() => {
      backgroundWrapper.classList.remove('active');
    }, 500);
  }

  function wheelChangeExhibition (e) {
    if (!throttler) {
      throttler = setTimeout(() => {
        let isScrollUp = false;
        if (e.deltaY < 0) isScrollUp = true;

        const batchNoteContent = document.querySelector('.batch-note .content');
        batchNoteContent.classList.remove('active');

        const batchNoteContentAuthor = document.querySelector('.batch-note .content.author');
        batchNoteContentAuthor.classList.remove('active');

        const length = data.length;
        const backgroundWrapper = document.querySelector('.background-wrapper');
        const batchPicture = document.querySelector('.batch-picture');
        const backgroundItems = document.querySelectorAll('.background-wrapper .hero-section');
        const batchPictureItems = document.querySelectorAll('.batch-picture .hero-section');

        // 이전 전시
        if (isScrollUp) {
          scrollUpAnimation(backgroundWrapper, backgroundItems, slideIdx, length);
          scrollUpAnimation(batchPicture, batchPictureItems, slideIdx, length);

          const slideIdxTemp = slideIdx - 1;
          if (slideIdxTemp < 0) changeSlideIdx(length - 1);
          else changeSlideIdx(slideIdxTemp);
        // 다음 전시
        } else {
          scrollDownAnimation(backgroundWrapper, backgroundItems, slideIdx, length);
          scrollDownAnimation(batchPicture, batchPictureItems, slideIdx, length);

          const slideIdxTemp = slideIdx + 1;
          if (slideIdxTemp >= length) changeSlideIdx(0);
          else changeSlideIdx(slideIdxTemp);
        }
        throttler = null;
      }, 300);
    }
  }

  function scrollUpAnimation (wrapper, element, idx, length) {
    if (!wrapper) return;

    let before = idx - 1;
    let next = idx + 1;

    wrapper.classList.add('load-prev');
    wrapper.classList.remove('load-next');

    if (before < 0) before = length - 1;
    if (next > length - 1) next = 0;

    element[before].classList.add('active');
    element[before].classList.remove('prev');

    element[idx].classList.add('prev');
    element[idx].classList.remove('active');

    element[next].classList.remove('prev');
    element[next].classList.remove('active');
  }

  function scrollDownAnimation (wrapper, element, idx, length) {
    if (!wrapper) return;

    let before = idx - 1;
    let next = idx + 1;

    wrapper.classList.add('load-next');
    wrapper.classList.remove('load-prev');

    if (before < 0) before = length - 1;
    if (next > length - 1) next = 0;

    element[before].classList.remove('prev');
    element[before].classList.remove('active');

    element[idx].classList.add('prev');
    element[idx].classList.remove('active');

    element[next].classList.add('active');
    element[next].classList.remove('prev');
  }
};

const BackgroundItem = ({ idx, length, data }) => {
  return (
    <div
      className={
        idx === 0
          ? 'hero-section active'
          : idx === length - 1
            ? 'hero-section prev'
            : 'hero-section'
      }
    >
      {data.exhibitionItemBackground.type === 'IMAGE'
        ? <img className="img lazy" data-src={data.exhibitionItemBackground.value} alt={`background-img-item-${idx + 1}`}></img>
        : data.exhibitionItemBackground.type === 'COLOR'
          ? <img className="img lazy" data-src={data.exhibitionItemBackground.value} alt={`background-img-item-${idx + 1}`}></img>
          : data.exhibitionItemBackground.type === 'VIDEO'
            ? <video
                className="video play lazy"
                data-src={data.exhibitionItemBackground.value}
                alt={`background-img-item-${idx + 1}`}
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
    console.log(target);
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
  slideIdx: PropTypes.number,
  data: PropTypes.array,
  changeSlideIdx: PropTypes.func
};

BackgroundItem.propTypes = {
  idx: PropTypes.number,
  length: PropTypes.number,
  data: PropTypes.object
};

export default BackgroundWrapper;
