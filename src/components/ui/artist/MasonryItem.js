import React from 'react';
import { Link } from 'react-router-dom';
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
    const { artistItem } = this.props;
    return (
      <Link to={`/artist/${artistItem.artistId}`}>
        <div className="masonry-item" onLoad={this.resizeMasonryItem}>
          <img className="item-img lazy" data-src={artistItem.profileImage}></img>
          <div className="caption-wrapper">
            <div className="caption nickname">{artistItem.nickname}</div>
            <div className="caption artist">{artistItem.introduction}</div>
          </div>
        </div>
      </Link>
    );
  }

  resizeMasonryItem (item) {
    const target = item.target;

    const grid = document.querySelector('.masonry');
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

    const itemImg = target;
    const rowSpan = Math.ceil((itemImg.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

    target.parentNode.parentNode.style.gridRowEnd = 'span ' + rowSpan;
  }
}

MasonryItem.propTypes = {
  artistItem: PropTypes.object
};

export default MasonryItem;
