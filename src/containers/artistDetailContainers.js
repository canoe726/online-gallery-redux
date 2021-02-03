import { connect } from 'react-redux';

import AppArtistDetail from '../components/ui/artistDetail/AppArtistDetail';

import {
  toggleIsFetching,
  toggleNoMoreData,
  initArtistDetailData,
  initArtistDetailPictureData,
  addArtistDetailPictureData
} from '../modules/artistDetailModule';

import OG_API from '../api/onlineGalleryApiConstants';

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
      dispatch(toggleIsFetching(true));
      const response = await fetch(OG_API.SAMPLE);
      // console.log(`${OG_API.ROOT + OG_API.ARTIST}/${id}`);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        // const data = null;
        if (data) {
          dispatch(initArtistDetailData(DUMMY.INIT_ARTIST_DETAIL_DATA));
          dispatch(toggleIsFetching(false));
        } else {
          dispatch(toggleIsFetching(false));
          dispatch(toggleNoMoreData(true));
        }
      }
    },
    initArtistDetailPictureData () {
      dispatch(initArtistDetailPictureData([]));
    },
    async addArtistDetailPictureData (id) {
      dispatch(toggleIsFetching(true));
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        // const data = null;
        if (data) {
          dispatch(addArtistDetailPictureData(DUMMY.ADD_ARTIST_DETAIL_PICTURE));
          dispatch(toggleIsFetching(false));
        } else {
          dispatch(toggleIsFetching(false));
          dispatch(toggleNoMoreData(true));
        }
      }
    }
  })
)(AppArtistDetail);
