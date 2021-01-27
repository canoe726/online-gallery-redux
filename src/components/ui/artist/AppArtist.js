import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/artist/artist.scss';

import MasonryItem from './MasonryItem';
import { resizeAllMasonryItems } from '../../util/masonry';
import { MasonryLoading } from '../../../containers/loadingContainers';

class AppArtist extends React.Component {
  constructor (props) {
    super(props);

    window.scrollTo(0, 0);

    this.resizeAllMasonryItems = resizeAllMasonryItems.bind(this);
    this.infinityScroll = this.infinityScroll.bind(this);
  }

  componentDidMount () {
    this.props.initArtistData();
    window.addEventListener('resize', this.resizeAllMasonryItems);
    window.addEventListener('scroll', this.infinityScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeAllMasonryItems);
  }

  render () {
    const { isFetching, artistList } = this.props;
    return (
      <div className="artist-wrapper">
        <div className="masonry-wrapper">
          <div className="masonry">
            {artistList.length > 0
              ? artistList.map((item, idx) =>
                <MasonryItem
                  key={idx}
                  artistItem={item}
                ></MasonryItem>)
              : '불러오는중...'
            }
          </div>
        </div>
        {this.props.isFetching
          ? <MasonryLoading
              isFetching={isFetching}
            ></MasonryLoading>
          : ''}
      </div>
    );
  }

  infinityScroll () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // 스크롤이 최하단이면서 fetch 중이 아닐 때 호출
    if (scrollTop + clientHeight >= scrollHeight && !this.props.isFetching) {
      this.props.addArtistData();
    }
  }
}

AppArtist.propTypes = {
  artistList: PropTypes.array,
  isFetching: PropTypes.bool,
  initArtistData: PropTypes.func,
  addArtistData: PropTypes.func
};

export default AppArtist;
