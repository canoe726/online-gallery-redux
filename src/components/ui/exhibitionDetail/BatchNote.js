import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const BatchNote = ({ data }) => {
  const { note, textSize, textColor, bgColor, borderColor, round, padding, positionHorizSize, positionVertSize } = data.exhibitionItemNote;
  const { participants } = data.exhibitionItem;

  useEffect(() => {
    activeContentAnimation();
  }, []);

  return (
    <div
      className="batch-note active"
      style={{
        fontSize: `${textSize}px`,
        color: `${textColor}`,
        border: `1px solid ${borderColor}`,
        borderRadius: `${round}px`,
        width: `${positionHorizSize}%`,
        height: `${positionVertSize}%`
      }}>
      <div
        className="content"
        style={{
          color: `${textColor}`,
          backgroundColor: `${bgColor}`,
          padding: `${padding}px`
        }}
      >
        {note}
      </div>
      <div
        className="content author"
        style={{
          color: `${textColor}`,
          backgroundColor: `${bgColor}`,
          padding: `${padding}px`
        }}
      >
        {participants}
      </div>
    </div>
  );

  function activeContentAnimation () {
    const batchNote = document.querySelector('.batch-note');
    setTimeout(() => {
      batchNote.classList.remove('active');
    }, 1000);
  }
};

BatchNote.propTypes = {
  data: PropTypes.object
};

export default BatchNote;
