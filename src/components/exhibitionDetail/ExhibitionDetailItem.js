import React from 'react';
import PropTypes from 'prop-types';

import BackgroundMusic from './BackgroundMusic';
import BackgroundWrapper from './BackgroundWrapper';
import BatchPicture from './BatchPicture';
import BatchNote from './BatchNote';

const ExhibitionDetailItem = ({ data, toggleModal, whenWheel }) => {
  return (
    <>
      <BackgroundMusic
        data={data.exhibitionItemBackground}
      ></BackgroundMusic>
      <BackgroundWrapper
        data={data.exhibitionItemBackground}
        whenWheel={whenWheel}
      ></BackgroundWrapper>
      <BatchPicture
        data={data.exhibitionItem}
        toggleModal={toggleModal}
      ></BatchPicture>
      <BatchNote
        data={data.exhibitionItemNote}
      ></BatchNote>
    </>
  );
};

ExhibitionDetailItem.propTypes = {
  data: PropTypes.object,
  toggleModal: PropTypes.func,
  whenWheel: PropTypes.func
};

export default ExhibitionDetailItem;
