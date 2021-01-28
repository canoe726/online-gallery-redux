import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/artist/artist.scss';

import MasonryItem from './MasonryItem';
import NoMoreData from './NoMoreData';
import { resizeAllMasonryItems } from '../../util/masonry';
import { PageLoading, MasonryLoading } from '../../../containers/loadingContainers';

class AppArtist extends React.Component {
  constructor (props) {
    super(props);

    this.resizeAllMasonryItems = resizeAllMasonryItems.bind(this);
    this.infinityScroll = this.infinityScroll.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0);
    this.props.initArtistData();

    window.addEventListener('load', this.resizeAllMasonryItems);
    window.addEventListener('resize', this.resizeAllMasonryItems);
    window.addEventListener('scroll', this.infinityScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('load', this.resizeAllMasonryItems);
    window.removeEventListener('resize', this.resizeAllMasonryItems);
    window.removeEventListener('scroll', this.infinityScroll);
  }

  render () {
    const { noMoreData, noMoreDataImage, isFetching, artistList } = this.props;
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
              : <PageLoading></PageLoading>
            }
          </div>
        </div>
        {noMoreData
          ? <NoMoreData
              noMoreDataImage={noMoreDataImage}
            ></NoMoreData>
          : isFetching
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
  noMoreData: PropTypes.bool,
  noMoreDataImage: PropTypes.string,
  isFetching: PropTypes.bool,
  initArtistData: PropTypes.func,
  addArtistData: PropTypes.func
};

export default AppArtist;
