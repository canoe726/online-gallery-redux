import React from 'react';
import PropTypes from 'prop-types';

class BatchNote extends React.Component {
  componentDidMount () {
    this.activeContentAnimation();
  }

  render () {
    const { note, textSize, textColor, bgColor, borderColor, round, padding } = this.props.data.exhibitionItemNote;
    const { participants } = this.props.data.exhibitionItem;
    return (
      <div
        className="batch-note active"
        style={{
          fontSize: `${textSize}px`,
          color: `${textColor}`,
          backgroundColor: `${bgColor}`,
          border: `${borderColor}`,
          borderRadius: `${round}px`,
          padding: `${padding}px`
        }}>
        <div
          className="content">
          {note}
        </div>
        <div className="content author">
          {participants}
        </div>
      </div>
    );
  }

  activeContentAnimation () {
    const batchNote = document.querySelector('.batch-note');
    setTimeout(() => {
      batchNote.classList.remove('active');
    }, 500);

    const contents = document.querySelectorAll('.batch-note .content');
    contents.forEach((content, idx) => {
      setTimeout(() => {
        content.classList.add('active');
      }, 1000 * (idx + 1));
    });
  }
}

BatchNote.propTypes = {
  data: PropTypes.object
};

export default BatchNote;
