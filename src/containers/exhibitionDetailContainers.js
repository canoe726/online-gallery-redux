import { connect } from 'react-redux';

import AppExhibitionDetail from '../components/ui/exhibitionDetail/AppExhibitionDetail';

import {
  changeSlideIdx,
  initExhibitionDetailData,
  initPictureData,
  toggleModal
} from '../actions/exhibitionDetailActions';

export const ExhibitionDetail = connect(
  state => ({
    slideIdx: state.exhibitionDetail.slideIdx,
    modalActive: state.exhibitionDetail.modalActive,
    exhibitionDetailList: state.exhibitionDetail.exhibitionDetailList,
    pictureList: state.exhibitionDetail.pictureList
  }),
  dispatch => ({
    changeSlideIdx (slideIdx) {
      dispatch(changeSlideIdx(slideIdx));
    },
    toggleModal (modalActive) {
      dispatch(toggleModal(modalActive));
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
              exhibitionItem: {
                exhibitionItemId: '1',
                title: '작품 1 제목 1',
                vrImageYN: 'N',
                productionYear: '2021',
                holding: 'art gallery 1',
                material: 'oil paint',
                participants: 'kim & lee',
                image: '/samples/artwork1.jpg',
                originalHorizSize: 25,
                originalVertSize: 30,
                position: 'left',
                ordering: 0
              },
              exhibitionItemBackground: {
                type: 'IMAGE',
                value: '/samples/artwork_d_1.jpg',
                bgm: '/samples/background_music1.mp3'
              },
              exhibitionItemNote: {
                note: 'this artwork is made by kim & lee',
                textSize: 12,
                textColor: 'rgb(159,57,255)',
                bgColor: 'rgb(0,0,50)',
                borderColor: 'red',
                round: 50,
                padding: 16,
                position: 'right',
                positionHorizSize: 30,
                positionVertSize: 25
              }
            },
            {
              exhibitionId: 2,
              exhibitionItem: {
                exhibitionItemId: '2',
                title: '작품 2 제목 2',
                vrImageYN: 'N',
                productionYear: '2022',
                holding: 'art gallery 2',
                material: 'water paint',
                participants: 'kim & lee & park',
                image: '/samples/artwork2.jpg',
                originalHorizSize: 20,
                originalVertSize: 60,
                position: 'right',
                ordering: 0
              },
              exhibitionItemBackground: {
                type: 'COLOR',
                value: '/samples/artwork_d_2.jpg',
                bgm: '/samples/background_music2.mp3'
              },
              exhibitionItemNote: {
                note: 'awesome!',
                textSize: 16,
                textColor: 'rgb(255,255,255)',
                bgColor: 'rgb(0,0,0)',
                borderColor: 'red',
                round: 16,
                padding: 20,
                position: 'left',
                positionHorizSize: 35,
                positionVertSize: 35
              }
            },
            {
              exhibitionId: 3,
              exhibitionItem: {
                exhibitionItemId: '3',
                title: '작품 3 제목 3',
                vrImageYN: 'N',
                productionYear: '2023',
                holding: 'art gallery 3',
                material: '...object',
                participants: 'kim',
                image: '/samples/artwork3.jpg',
                originalHorizSize: 40,
                originalVertSize: 50,
                position: 'left',
                ordering: 0
              },
              exhibitionItemBackground: {
                type: 'VIDEO',
                value: '/samples/art_background.mp4',
                bgm: ''
              },
              exhibitionItemNote: {
                note: '벌써 시간이 새벽 3시...',
                textSize: 13,
                textColor: 'rgb(255,255,255)',
                bgColor: 'rgb(0,0,0)',
                borderColor: 'red',
                round: 0,
                padding: 14,
                position: 'right',
                positionHorizSize: 30,
                positionVertSize: 40
              }
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
