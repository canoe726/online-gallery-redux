import React from 'react';
import PropTypes from 'prop-types';

import BackgroundMusic from './BackgroundMusic';
import BackgroundWrapper from './BackgroundWrapper';
import BatchPicture from './BatchPicture';
import BatchNote from './BatchNote';
import ArtworkDot from './ArtworkDot';
import ModalWrapper from './ModalWrapper';

class ExhibitionDetailItem extends React.Component {
  render () {
    const { slideIdx, modalActive, data, toggleModal } = this.props;
    return (
      <div className="exhibition-detail-item">
        <BackgroundMusic
          data={data[slideIdx].exhibitionItemBackground}
        ></BackgroundMusic>

        <BackgroundWrapper
          slideIdx={slideIdx}
          data={data}
        ></BackgroundWrapper>

        <BatchPicture
          modalActive={modalActive}
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
  }
}

ExhibitionDetailItem.propTypes = {
  slideIdx: PropTypes.number,
  modalActive: PropTypes.number,
  data: PropTypes.array,
  changeSlideIdx: PropTypes.func,
  toggleModal: PropTypes.func
};

export default ExhibitionDetailItem;
