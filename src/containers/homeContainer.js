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

export const Home = connect(
  state => ({
    banner: state.home.banner,
    bannerIdx: state.home.bannerIdx,
    exhibition: state.home.exhibition,
    exhibitionCardSize: 4,
    exhibitionCardIdx: 0,
    artist: state.home.artist,
    artistCardSize: 4,
    artistCardIdx: 0
  }),
  dispatch => ({
    async initHomeBanner () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        dispatch(initHomeBanner(data));
      }
    },
    async initHomeExhibition () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        dispatch(initHomeExhibition(data));
      }
    },
    async initHomeArtist () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        const data = await response.json();
        // console.log(data.records);
        dispatch(initHomeArtist(data));
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
