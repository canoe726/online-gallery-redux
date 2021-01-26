import React from 'react';
import PropTypes from 'prop-types';

class NoticeItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false,
      maxHeight: '0px'
    };
    this.toggleItem = this.toggleItem.bind(this);
  }

  render () {
    const { notice } = this.props;
    const { isOpen, maxHeight } = this.state;
    return (
      <div className="collapsible-wrapper" onClick={this.toggleItem}>
        <button
          className={isOpen ? 'collapsible active' : 'collapsible'}
        >{notice.title}</button>
          <div className="content" style={isOpen ? { maxHeight: maxHeight } : { maxHeight: '0px' } }>
            <p>{notice.contents}</p>
          </div>
      </div>
    );
  }

  toggleItem () {
    const maxHeight = document.querySelector('.content').scrollHeight + 60;
    this.setState({
      isOpen: !this.state.isOpen,
      maxHeight: `${maxHeight}px`
    });
  }
}

NoticeItem.propTypes = {
  notice: PropTypes.object
};

export default NoticeItem;
