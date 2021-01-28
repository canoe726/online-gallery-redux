import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/artistDetail/artistDetail.scss';

import ArtistDetailItem from './ArtistDetailItem';

import { PageLoading } from '../../../containers/loadingContainers';

class AppArtistDetail extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0);

    this.props.initArtistDetailData();
    this.props.initArtistDetailPictureData();
  }

  render () {
    const { noMoreData, isFetching, artistDetailData, artistDetailPictureList, addArtistDetailPictureData } = this.props;
    return (
      <div className="artist-detail-wrapper">
        {Object.keys(artistDetailData).length !== 0
          ? <ArtistDetailItem
              noMoreData={noMoreData}
              isFetching={isFetching}
              artistDetailData={artistDetailData}
              artistDetailPictureList={artistDetailPictureList}
              addArtistDetailPictureData={addArtistDetailPictureData}
            ></ArtistDetailItem>
          : <PageLoading></PageLoading>}
      </div>
    );
  }
}

AppArtistDetail.propTypes = {
  noMoreData: PropTypes.bool,
  isFetching: PropTypes.bool,
  artistDetailData: PropTypes.object,
  artistDetailPictureList: PropTypes.array,
  initArtistDetailData: PropTypes.func,
  initArtistDetailPictureData: PropTypes.func,
  addArtistDetailPictureData: PropTypes.func
};

export default AppArtistDetail;
