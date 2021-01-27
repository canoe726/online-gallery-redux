import { connect } from 'react-redux';

import AppExhibition from '../components/ui/exhibition/AppExhibition';

import { initExhibitionData, addExhibitionData, toggleIsFetching } from '../actions/exhibitionActions';

export const Exhibition = connect(
  state => ({
    exhibitionList: state.exhibition.exhibitionList,
    isFetching: state.exhibition.isFetching
  }),
  dispatch => ({
    toggleIsFetching (isFetching) {
      dispatch(toggleIsFetching(isFetching));
    },
    async initExhibitionData () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        // dispatch(initExhibitionData(data));
        dispatch(initExhibitionData(
          [
            {
              exhibitionId: 2,
              title: '전시회 2',
              posterImage: '/samples/artwork2.jpg',
              startAt: '2021.01.22',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 1,
              title: '전시회 1',
              posterImage: '/samples/artwork1.jpg',
              startAt: '2021.01.21',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 3,
              title: '전시회 3',
              posterImage: '/samples/artwork3.jpg',
              startAt: '2021.01.23',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 4,
              title: '전시회 4',
              posterImage: '/samples/artwork4.jpg',
              startAt: '2021.01.24',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 5,
              title: '전시회 5',
              posterImage: '/samples/artwork5.jpg',
              startAt: '2021.01.25',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 6,
              title: '전시회 6',
              posterImage: '/samples/artwork6.jpg',
              startAt: '2021.01.26',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 7,
              title: '전시회 7',
              posterImage: '/samples/artwork7.jpg',
              startAt: '2021.01.27',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 8,
              title: '전시회 8',
              posterImage: '/samples/artwork8.jpg',
              startAt: '2021.01.28',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            }
          ]
        ));
        dispatch(toggleIsFetching(false));
      } else {
        dispatch(toggleIsFetching(true));
      }
    },
    async addExhibitionData () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        // dispatch(addExhibitionData(data));
        dispatch(addExhibitionData(
          [
            {
              exhibitionId: 1,
              title: '전시회 1',
              posterImage: '/samples/artwork1.jpg',
              startAt: '2021.01.21',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 2,
              title: '전시회 2',
              posterImage: '/samples/artwork2.jpg',
              startAt: '2021.01.22',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 3,
              title: '전시회 3',
              posterImage: '/samples/artwork3.jpg',
              startAt: '2021.01.23',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 4,
              title: '전시회 4',
              posterImage: '/samples/artwork4.jpg',
              startAt: '2021.01.24',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 5,
              title: '전시회 5',
              posterImage: '/samples/artwork5.jpg',
              startAt: '2021.01.25',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 6,
              title: '전시회 6',
              posterImage: '/samples/artwork6.jpg',
              startAt: '2021.01.26',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 7,
              title: '전시회 7',
              posterImage: '/samples/artwork7.jpg',
              startAt: '2021.01.27',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            },
            {
              exhibitionId: 8,
              title: '전시회 8',
              posterImage: '/samples/artwork8.jpg',
              startAt: '2021.01.28',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            }
          ]
        ));
        dispatch(toggleIsFetching(false));
      } else {
        dispatch(toggleIsFetching(true));
      }
    }
  })
)(AppExhibition);
