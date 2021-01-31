import React from 'react';
import PropTypes from 'prop-types';

class BatchNote extends React.Component {
  componentDidMount () {
    this.activeContentAnimation();
  }

  render () {
    const { note, textSize, textColor, bgColor, borderColor, round, padding, positionHorizSize, positionVertSize } = this.props.data.exhibitionItemNote;
    const { participants } = this.props.data.exhibitionItem;
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
  }

  activeContentAnimation () {
    const batchNote = document.querySelector('.batch-note');
    setTimeout(() => {
      batchNote.classList.remove('active');
    }, 1000);
  }
}

BatchNote.propTypes = {
  data: PropTypes.object
};

export default BatchNote;
