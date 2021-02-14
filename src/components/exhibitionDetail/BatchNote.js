import React from 'react';
import PropTypes from 'prop-types';

BatchNote.propTypes = {
  data: PropTypes.object.isRequired
};

function BatchNote ({ data }) {
  const { note, textSize, textColor, bgColor, borderColor, round, padding, positionHorizSize, positionVertSize } = data;

  return (
    <div
      className="batch-note"
      style={{
        fontSize: `${textSize}px`,
        color: `${textColor}`,
        border: `1px solid ${borderColor}`,
        borderRadius: `${round}px`,
        width: `${positionHorizSize}px`,
        height: `${positionVertSize}px`
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

export default BatchNote;
