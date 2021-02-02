import { connect } from 'react-redux';

import AppExhibitionDetail from '../components/ui/exhibitionDetail/AppExhibitionDetail';

import {
  changeSlideIdx,
  initExhibitionDetailData,
  initPictureData,
  toggleModal
} from '../modules/exhibitionDetailModule';

import OG_API from '../data/onlineGalleryApiConstants';

// delete this
import DUMMY from '../data/dummy';

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
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        // dispatch(addExhibitionData(data));
        dispatch(initExhibitionDetailData(DUMMY.EXHIBITION_DETAIL_DATA));
      }
    },
    async initPictureData () {
      const response = await fetch(OG_API.SAMPLE);
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
