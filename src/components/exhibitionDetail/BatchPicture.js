import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { onlineGalleryApiConstants as API } from '../../api/onlineGalleryApiConstants';

const BatchPicture = ({ data, toggleModal }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="batch-picture"
      onClick={activeModal}
      style={{
        width: `${data.originalHorizSize / 5}px`,
        height: `${data.originalVertSize / 5}px`
      }}
    >
      <img
        className="img lazy"
        data-src={API.ROOT_IMG + data.image}
        alt={'batch-img-item'}
      ></img>
    </div>
  );

  function activeModal () {
    // className of modalActive - 0 : '', 1 : sketch, 2 : sketch out
    dispatch(toggleModal(1));
  }
};

BatchPicture.propTypes = {
  data: PropTypes.object,
  toggleModal: PropTypes.func
};

export default BatchPicture;
