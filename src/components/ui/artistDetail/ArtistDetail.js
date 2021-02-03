import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/artistDetail/artistDetail.scss';

import ArtistDetailItem from './ArtistDetailItem';

import { PageLoadingContainer } from '../../../containers/loadingContainers';

const ArtistDetail = ({
  noMoreData,
  isFetching,
  artistDetailData,
  artistDetailPictureList,
  initArtistDetailData,
  initArtistDetailPictureData,
  addArtistDetailPictureData
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    initArtistDetailData();
    initArtistDetailPictureData();
    addArtistDetailPictureData();
  }, []);

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
        : <PageLoadingContainer></PageLoadingContainer>}
    </div>
  );
};

ArtistDetail.propTypes = {
  noMoreData: PropTypes.bool,
  isFetching: PropTypes.bool,
  artistDetailData: PropTypes.object,
  artistDetailPictureList: PropTypes.array,
  initArtistDetailData: PropTypes.func,
  initArtistDetailPictureData: PropTypes.func,
  addArtistDetailPictureData: PropTypes.func
};

export default ArtistDetail;
