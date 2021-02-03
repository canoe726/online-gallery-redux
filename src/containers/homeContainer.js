import { connect } from 'react-redux';

import Home from '../components/ui/home/Home';

import {
  initHomeBanner,
  initHomeExhibition,
  initHomeArtist,
  changeHomeBannerIdx
} from '../modules/homeModule';

import OG_API from '../api/onlineGalleryApiConstants';

// delete this
import DUMMY from '../data/dummy';

export const HomeContainer = connect(
  state => ({
    banner: state.home.banner,
    bannerIdx: state.home.bannerIdx,
    exhibition: state.home.exhibition,
    artist: state.home.artist
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
    }
  })
)(Home);
