import { connect } from 'react-redux';

import AppHome from '../components/ui/home/AppHome';

import {
  initHomeBanner,
  initHomeExhibition,
  initHomeArtist,
  changeHomeBannerIdx,
  changeHomeExhibitionCardIdx,
  changeHomeArtistCardIdx
} from '../actions/homeActions';

import OG_API from '../constants/onlineGalleryApiConstants';

// delete this
import DUMMY from '../data/dummy';

export const Home = connect(
  state => ({
    banner: state.home.banner,
    bannerIdx: state.home.bannerIdx,
    exhibition: state.home.exhibition,
    exhibitionCardIdx: state.home.exhibitionCardIdx,
    artist: state.home.artist,
    artistCardIdx: state.home.artistCardIdx
  }),
  dispatch => ({
    async initHomeBanner () {
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        dispatch(initHomeBanner(DUMMY.HOME_BANNER));
      }
    },
    async initHomeExhibition () {
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        dispatch(initHomeExhibition(DUMMY.HOME_EXHIBITION));
      }
    },
    async initHomeArtist () {
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        // const data = await response.json();
        // console.log(data.records);
        dispatch(initHomeArtist(DUMMY.HOME_ARTIST));
      }
    },
    changeHomeBannerIdx (bannerIdx) {
      dispatch(changeHomeBannerIdx(bannerIdx));
    },
    changeHomeExhibitionCardIdx (exhibitionCardIdx) {
      dispatch(changeHomeExhibitionCardIdx(exhibitionCardIdx));
    },
    changeHomeArtistCardIdx (artistCardIdx) {
      dispatch(changeHomeArtistCardIdx(artistCardIdx));
    }
  })
)(AppHome);
