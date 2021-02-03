import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ModalWrapper = ({ modalActive, data, toggleModal }) => {
  let isDown = false;
  let prevMouseX = -1;
  let prevMouseY = -1;

  const modalImgRef = useRef();
  const modalVideoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      const modalImg = modalImgRef.current;
      modalImg.style.transform = 'scale(1) translate(0px,0px)';
      const modalVideo = modalVideoRef.current;
      modalVideo.style.transform = 'scale(1) translate(0px,0px)';
    }, 500);
  });

  return (
    <div
      id="modal-wrapper"
      className={
        modalActive === 0
          ? ''
          : modalActive === 1
            ? 'sketch'
            : 'sketch out'}
      onClick={closeModal}
      onMouseDown={whenMouseDown}
      onMouseUp={whenMouseUp}
      onMouseMove={whenMouseMove}
      onWheel={scaleModalContent}
    >
      <div className="close close-container">
        <div className="close close-leftright"></div>
        <div className="close close-rightleft"></div>
      </div>

      <div className="modal-background">
        <div className="modal">
          <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" fill="none" rx="0" ry="0" width="100%" height="100%"></rect>
          </svg>

          <img
            className={modalActive ? 'modal-img' : 'modal-img hidden'}
            src={data.exhibitionItem.image}
            alt="modal-img"
            ref={modalImgRef}
          ></img>
          <video
            className="modal-video hidden"
            ref={modalVideoRef}
          ></video>

        </div>
      </div>
    </div>
  );

  function whenMouseDown (e) {
    if ((e.target.classList.contains('modal-img') ||
         e.target.classList.contains('modal-video'))) {
      isDown = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    }
  }

  function whenMouseUp () {
    isDown = false;
  }

  function whenMouseMove (e) {
    e.preventDefault();
    // 드래그 상태에서 움직인 경우
    if (isDown) {
      if (e.target.tagName === 'IMG') {
        const modalImg = e.target;
        howToMove(modalImg, e);
      }
    }
  }

  function howToMove (elem, e) {
    const curMouseX = e.clientX;
    const curMouseY = e.clientY;

    const transform = elem.style.transform;
    if (!transform) {
      elem.style.transform = 'scale(1.0) translate(0px, 0px)';
    } else {
      const transform = elem.style.transform.split(' ');
      const scale = transform[0];
      let translateX = transform[1];
      let translateY = transform[2];

      translateX = translateX.substr(10);
      translateX = translateX.slice(0, -3);
      translateX *= 1;

      translateY = translateY.slice(0, -3);
      translateY *= 1;

      const gapX = curMouseX - prevMouseX;
      const gapY = curMouseY - prevMouseY;

      translateX += gapX;
      translateY += gapY;

      elem.style.transform = `${scale} translate(${translateX}px, ${translateY}px)`;

      prevMouseX = curMouseX;
      prevMouseY = curMouseY;
    }
  }

  // 휠을 이동하면서 크기 변경
  function scaleModalContent (e) {
    const target = e.target;
    if (target.classList[0].includes('close')) return;

    const dataType = target.tagName;

    let isScrollUp = false;
    if (e.deltaY < 0) isScrollUp = true;
    if (dataType === 'IMG') {
      const modalImg = modalImgRef.current;
      howToScale(isScrollUp, modalImg);
    }
  }

  function howToScale (isScrollUp, elem) {
    const transform = elem.style.transform;
    if (!transform) {
      elem.style.transform = 'scale(1.0) translate(0px, 0px)';
    } else {
      const transform = elem.style.transform.split(' ');
      const scale = transform[0];
      const translate = transform[1] + transform[2];

      let scaleSize = scale.substr(6);
      scaleSize = scaleSize.slice(0, -1);
      scaleSize *= 1;

      if (scaleSize <= 0.5 && !isScrollUp) return;
      if (scaleSize >= 5.0 && isScrollUp) return;

      if (isScrollUp) elem.style.transform = `scale(${scaleSize + 0.05}) ${translate}`;
      else elem.style.transform = `scale(${scaleSize - 0.05}) ${translate}`;
    }
  }

  function closeModal (e) {
    const target = e.target;
    const isModalBackground = target.classList.contains('modal-background');
    const modalVideo = modalVideoRef.current;

    // className of modalActive - 0 : '', 1 : sketch, 2 : sketch out
    if (modalActive === 1) {
      if (isModalBackground) {
        // 비디오 초기화
        if (modalVideo.src) {
        //   modalVideo.currentTime = 0;
        //   modalVideo.pause();
        //   modalVideo.play();
        }
        toggleModal(2);
      // X 버튼 클릭
      } else if (target.classList[0] === 'close') {
        // 비디오 초기화
        if (modalVideo.src) {
        //   modalVideo.currentTime = 0;
        //   modalVideo.pause();
        //   modalVideo.play();
        }
        toggleModal(2);
      }
    }
  }
};

ModalWrapper.propTypes = {
  modalActive: PropTypes.number,
  data: PropTypes.object,
  toggleModal: PropTypes.func
};

export default ModalWrapper;
