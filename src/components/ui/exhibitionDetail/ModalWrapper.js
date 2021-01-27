import React from 'react';
import PropTypes from 'prop-types';

class ModalWrapper extends React.Component {
  constructor (props) {
    super(props);

    this.isDown = false;
    this.prevMouseX = -1;
    this.prevMouseY = -1;

    this.whenMouseDown = this.whenMouseDown.bind(this);
    this.whenMouseUp = this.whenMouseUp.bind(this);
    this.whenMouseMove = this.whenMouseMove.bind(this);
    this.scaleModalContent = this.scaleModalContent.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  render () {
    const { modalActive, data } = this.props;
    return (
      <div
        id="modal-wrapper"
        className={
          modalActive === 0
            ? ''
            : modalActive === 1
              ? 'sketch'
              : 'sketch out'}
        onClick={this.closeModal}
        onMouseDown={this.whenMouseDown}
        onMouseUp={this.whenMouseUp}
        onMouseMove={this.whenMouseMove}
        onWheel={this.scaleModalContent}
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
              style={{ transform: 'scale(1) translate(0px,0px)' }}
            ></img>
            <video className="modal-video hidden"></video>

          </div>
        </div>
      </div>
    );
  }

  whenMouseDown (e) {
    if ((e.target.classList.contains('modal-img') ||
         e.target.classList.contains('modal-video'))) {
      this.isDown = true;
      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;
    }
  }

  whenMouseUp () {
    this.isDown = false;
  }

  whenMouseMove (e) {
    e.preventDefault();
    // 드래그 상태에서 움직인 경우
    if (this.isDown) {
      if (e.target.tagName === 'IMG') {
        const modalImg = e.target;
        this.howToMove(modalImg, e);
      }
    }
  }

  howToMove (elem, e) {
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

      const gapX = curMouseX - this.prevMouseX;
      const gapY = curMouseY - this.prevMouseY;

      translateX += gapX;
      translateY += gapY;

      elem.style.transform = `${scale} translate(${translateX}px, ${translateY}px)`;

      this.prevMouseX = curMouseX;
      this.prevMouseY = curMouseY;
    }
  }

  // 휠을 이동하면서 크기 변경
  scaleModalContent (e) {
    const target = e.target;
    if (target.classList[0].includes('close')) return;

    const dataType = target.tagName;
    const modal = e.target.parentNode;

    let isScrollUp = false;
    if (e.deltaY < 0) isScrollUp = true;
    if (dataType === 'IMG') {
      const modalImg = modal.querySelector('.modal-img');
      this.howToScale(isScrollUp, modalImg);
    }
  }

  howToScale (isScrollUp, elem) {
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

  closeModal (e) {
    const target = e.target;
    const isModalBackground = target.classList.contains('modal-background');
    const modalVideo = document.querySelector('.modal-video');

    // className of modalActive - 0 : '', 1 : sketch, 2 : sketch out
    if (this.props.modalActive === 1) {
      if (isModalBackground) {
        // 비디오 초기화
        if (modalVideo.src) {
        //   modalVideo.currentTime = 0;
        //   modalVideo.pause();
        //   modalVideo.play();
        }
        this.props.toggleModal(2);
      // X 버튼 클릭
      } else if (target.classList[0] === 'close') {
        // 비디오 초기화
        if (modalVideo.src) {
        //   modalVideo.currentTime = 0;
        //   modalVideo.pause();
        //   modalVideo.play();
        }
        this.props.toggleModal(2);
      }
    }
  }
}

ModalWrapper.propTypes = {
  modalActive: PropTypes.number,
  data: PropTypes.object,
  toggleModal: PropTypes.func
};

export default ModalWrapper;
