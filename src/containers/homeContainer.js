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
        // const data = await response.json();
        // console.log(data);
        dispatch(initHomeBanner(
          [
            {
              bannerImgPath: 'https://dev-online-gallery-images.s3.ap-northeast-2.amazonaws.com/exhibition/1/item/1/1_%E1%84%8B%E1%85%A1%E1%84%92%E1%85%A1%E1%84%86%E1%85%A9%E1%84%90%E1%85%A6%E1%86%AF6105%E1%84%92%E1%85%A9.jpg',
              bannerUrl: '/'
            },
            {
              bannerImgPath: '/samples/banner2.jpg',
              bannerUrl: '/'
            },
            {
              bannerImgPath: '/samples/banner3.jpg',
              bannerUrl: '/'
            }
          ]
        ));
      }
    },
    async initHomeExhibition () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        dispatch(initHomeExhibition(
          [
            {
              exhibitionId: '0',
              title: '전시제목 1',
              posterImage: '/samples/artwork1.jpg'
            },
            {
              exhibitionId: '1',
              title: '전시제목 2',
              posterImage: '/samples/artwork2.jpg'
            },
            {
              exhibitionId: '2',
              title: '전시제목 3',
              posterImage: '/samples/artwork3.jpg'
            },
            {
              exhibitionId: '3',
              title: '전시제목 4',
              posterImage: '/samples/artwork4.jpg'
            },
            {
              exhibitionId: '4',
              title: '전시제목 5',
              posterImage: '/samples/artwork5.jpg'
            },
            {
              exhibitionId: '5',
              title: '전시제목 6',
              posterImage: '/samples/artwork6.jpg'
            },
            {
              exhibitionId: '6',
              title: '전시제목 7',
              posterImage: '/samples/artwork7.jpg'
            },
            {
              exhibitionId: '7',
              title: '전시제목 8',
              posterImage: '/samples/artwork8.jpg'
            }
          ]
        ));
      }
    },
    async initHomeArtist () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        // const data = await response.json();
        // console.log(data.records);
        dispatch(initHomeArtist(
          [
            {
              artistId: '0',
              name: 'AAA',
              nickname: 'A nickname',
              profileImage: '/samples/artist1.jpg',
              introduction: 'A 입니다.',
              note: '안녕하세요'
            },
            {
              artistId: '1',
              name: 'BBB',
              nickname: 'B nickname',
              profileImage: '/samples/artist2.jpg',
              introduction: 'B 입니다.',
              note: '안녕하세요'
            },
            {
              artistId: '2',
              name: 'CCC',
              nickname: 'C nickname',
              profileImage: '/samples/artist3.jpg',
              introduction: 'C 입니다.',
              note: '안녕하세요'
            },
            {
              artistId: '3',
              name: 'DDD',
              nickname: 'D nickname',
              profileImage: '/samples/artist4.jpg',
              introduction: 'D 입니다.',
              note: '안녕하세요'
            },
            {
              artistId: '4',
              name: 'EEE',
              nickname: 'E nickname',
              profileImage: '/samples/artist5.jpg',
              introduction: 'E 입니다.',
              note: '안녕하세요'
            },
            {
              artistId: '5',
              name: 'FFF',
              nickname: 'F nickname',
              profileImage: '/samples/artist6.jpg',
              introduction: 'F 입니다.',
              note: '안녕하세요'
            },
            {
              artistId: '60',
              name: 'GGG',
              nickname: 'G nickname',
              profileImage: '/samples/artist7.jpg',
              introduction: 'G 입니다.',
              note: '안녕하세요'
            },
            {
              artistId: '7',
              name: 'HHH',
              nickname: 'H nickname',
              profileImage: '/samples/artist8.jpg',
              introduction: 'H 입니다.',
              note: '안녕하세요'
            }
          ]
        ));
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
