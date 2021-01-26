import React from 'react';
import PropTypes from 'prop-types';

import { lazyLoad } from '../../util/lazyLoading';

class MasonryItem extends React.Component {
  constructor (props) {
    super(props);
    this.resizeMasonryItem = this.resizeMasonryItem.bind(this);
  }

  componentDidMount () {
    lazyLoad();
  }

  render () {
    const { exhibitionItem } = this.props;
    return (
      <div className="masonry-item" onLoad={this.resizeMasonryItem}>
        <img className="item-img lazy" data-src={exhibitionItem.posterImage}></img>
        <div className="caption-wrapper">
          <div className="caption image">{exhibitionItem.title}</div>
          <div className="caption artist">{exhibitionItem.participants}</div>
        </div>
      </div>
    );
  }

  resizeMasonryItem (item) {
    const target = item.target;

    const grid = document.querySelector('.masonry');
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

    const itemImg = target;
    const rowSpan = Math.ceil((itemImg.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

    target.parentNode.style.gridRowEnd = 'span ' + rowSpan;
  }
}

MasonryItem.propTypes = {
  exhibitionItem: PropTypes.object
};

export default MasonryItem;
