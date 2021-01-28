import { connect } from 'react-redux';

import AppArtistDetail from '../components/ui/artistDetail/AppArtistDetail';

import {
  toggleIsFetching,
  toggleNoMoreData,
  initArtistDetailData,
  initArtistDetailPictureData,
  addArtistDetailPictureData
} from '../actions/artistDetailActions';

import OG_API from '../constants/onlineGalleryApiConstants';

// delete this
import DUMMY from '../data/dummy';

export const ArtistDetail = connect(
  state => ({
    noMoreData: state.artistDetail.noMoreData,
    isFetching: state.artistDetail.isFetching,
    artistDetailData: state.artistDetail.artistDetailData,
    artistDetailPictureList: state.artistDetail.artistDetailPictureList
  }),
  dispatch => ({
    toggleIsFetching (isFetching) {
      dispatch(toggleIsFetching(isFetching));
    },
    toggleNoMoreData (noMoreData) {
      dispatch(toggleNoMoreData(noMoreData));
    },
    async initArtistDetailData (id) {
      const response = await fetch(OG_API.SAMPLE);
      // const response = await fetch(`${ROOT + ARTIST}/${id}`);
      // console.log(`${OG_API.ROOT + OG_API.ARTIST}/${id}`);
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        // dispatch(addExhibitionData(data));
        dispatch(initArtistDetailData(DUMMY.INIT_ARTIST_DETAIL_DATA));
      }
    },
    initArtistDetailPictureData () {
      dispatch(initArtistDetailPictureData([]));
    },
    async addArtistDetailPictureData (id) {
      const response = await fetch(OG_API.SAMPLE);
      // const response = await fetch();
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        // dispatch(addExhibitionData(data));
        dispatch(addArtistDetailPictureData(DUMMY.ADD_ARTIST_DETAIL_PICTURE));
      }
    }
  })
)(AppArtistDetail);
