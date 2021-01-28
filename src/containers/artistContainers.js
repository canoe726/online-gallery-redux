import { connect } from 'react-redux';

import AppArtist from '../components/ui/artist/AppArtist';

import { initArtistData, addArtistData, toggleIsFetching, toggleNoMoreData } from '../actions/artistActions';

import OG_API from '../constants/onlineGalleryApiConstants';

// delete this
import DUMMY from '../data/dummy';

export const Artist = connect(
  state => ({
    artistList: state.artist.artistList,
    noMoreData: state.artist.noMoreData,
    noMoreDataImage: state.artist.noMoreDataImage,
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
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        // dispatch(addArtistData(data));
        dispatch(initArtistData(DUMMY.INIT_ARTIST_DATA));
        dispatch(toggleIsFetching(false));
      } else {
        dispatch(toggleIsFetching(true));
      }
    },
    async addArtistData () {
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        // dispatch(addArtistData(data));
        dispatch(addArtistData(DUMMY.ADD_ARTIST_DATA));
        dispatch(toggleIsFetching(false));
      } else {
        dispatch(toggleIsFetching(true));
      }
    }
  })
)(AppArtist);
