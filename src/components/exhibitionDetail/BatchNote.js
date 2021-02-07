import React from 'react';
import PropTypes from 'prop-types';

const BatchNote = ({ data }) => {
  const { note, textSize, textColor, bgColor, borderColor, round, padding, positionHorizSize, positionVertSize } = data;
  // const { participants } = data.exhibitionItem;

  return (
    <div
      className="batch-note"
      style={{
        fontSize: `${textSize}px`,
        color: `${textColor}`,
        border: `1px solid ${borderColor}`,
        borderRadius: `${round}px`,
        width: `${positionHorizSize}%`,
        height: `${positionVertSize}%`
      }}
    >
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
        {/* {participants} */}
      </div>
    </div>
  );
};

BatchNote.propTypes = {
  data: PropTypes.object
};

export default BatchNote;
