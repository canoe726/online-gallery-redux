import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

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
    const { history, artistItem } = this.props;
    return (
      <div
        className="masonry-item"
        onLoad={this.resizeMasonryItem}
        onClick={() => history.push(`/artist/${artistItem.artistId}`)}
        >
        <img className="item-img lazy" data-src={artistItem.profileImage}></img>
        <div className="caption-wrapper">
          <div className="caption nickname">{artistItem.nickname}</div>
          <div className="caption artist">{artistItem.introduction}</div>
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
  history: ReactRouterPropTypes.history.isRequired,
  artistItem: PropTypes.object
};

export default withRouter(MasonryItem);
