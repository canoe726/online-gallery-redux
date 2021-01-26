import { connect } from 'react-redux';

import AppExhibitionDetail from '../components/ui/exhibitionDetail/AppExhibitionDetail';

import { changeSlideIdx, initExhibitionDetailData, initPictureData } from '../actions/exhibitionDetailActions';

export const ExhibitionDetail = connect(
  state => ({
    slideIdx: state.exhibitionDetail.slideIdx
  }),
  dispatch => ({
    changeSlideIdx (slideIdx) {
      dispatch(changeSlideIdx(slideIdx));
    },
    async initExhibitionDetailData () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        // dispatch(addExhibitionData(data));
        dispatch(initExhibitionDetailData(
          [
            {
              exhibitionId: 1,
              title: '전시회 1',
              posterImage: './samples/artwork1.jpg',
              startAt: '2021.01.21',
              endAt: '2021.01.31',
              participants: '김영배, 이원기'
            }
          ]
        ));
      }
    },
    async initPictureData () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        // dispatch(addExhibitionData(data));
        dispatch(initPictureData(
          [
            {
            }
          ]
        ));
      }
    }
  })
)(AppExhibitionDetail);
