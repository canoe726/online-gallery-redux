import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const NoticeItem = ({ notice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef();

  return (
    <div className="collapsible-wrapper" onClick={toggleItem}>
      <button
        className={isOpen ? 'collapsible active' : 'collapsible'}
      >{notice.title}</button>
        <div
          className="content"
          style={isOpen ? { maxHeight: maxHeight } : { maxHeight: '0px' }}
          ref={contentRef}
        >
          <p>{notice.contents}</p>
        </div>
    </div>
  );

  function toggleItem () {
    setIsOpen(isOpen => !isOpen);
    const elementHeight = contentRef.current.scrollHeight + 60;
    setMaxHeight(`${elementHeight}px`);
  }
};

NoticeItem.propTypes = {
  notice: PropTypes.object
};

export default NoticeItem;
