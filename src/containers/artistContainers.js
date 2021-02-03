import { connect } from 'react-redux';

import Artist from '../components/ui/artist/Artist';

import {
  initArtistData,
  addArtistData,
  toggleIsFetching,
  toggleNoMoreData
} from '../modules/artistModule';

import OG_API from '../api/onlineGalleryApiConstants';

// delete this
import DUMMY from '../data/dummy';

export const ArtistContainer = connect(
  state => ({
    artistList: state.artist.artistList,
    noMoreData: state.artist.noMoreData,
    isFetching: state.artist.isFetching
  }),
  dispatch => ({
    toggleIsFetching (isFetching) {
      dispatch(toggleIsFetching(isFetching));
    },
    toggleNoMoreData (noMoreData) {
      dispatch(toggleNoMoreData(noMoreData));
    },
    async initArtistData () {
      dispatch(toggleIsFetching(true));
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        // dispatch(addArtistData(data));
        // const data = null;
        if (data) {
          dispatch(initArtistData(DUMMY.INIT_ARTIST_DATA));
          dispatch(toggleIsFetching(false));
        } else {
          dispatch(toggleIsFetching(false));
          dispatch(toggleNoMoreData(true));
        }
      } else {
        dispatch(toggleIsFetching(true));
      }
    },
    async addArtistData () {
      dispatch(toggleIsFetching(true));
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        // dispatch(addArtistData(data));
        // const data = null;
        if (data) {
          dispatch(addArtistData(DUMMY.ADD_ARTIST_DATA));
          dispatch(toggleIsFetching(false));
        } else {
          dispatch(toggleIsFetching(false));
          dispatch(toggleNoMoreData(true));
        }
      } else {
        dispatch(toggleIsFetching(true));
      }
    }
  })
)(Artist);
