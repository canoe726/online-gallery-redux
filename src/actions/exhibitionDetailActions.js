import C from '../constants/exhibitionDetailConstants';

export const changeSlideIdx = (idx) => ({
  type: C.CHANGE_SLIDE_IDX,
  slideIdx: idx
});

export const initExhibitionDetailData = (data) => ({
  type: C.INIT_EXHIBITION_DETAIL_DATA,
  exhibitionDetailList: data
});

export const initPictureData = (data) => ({
  type: C.INIT_PICTURE_DATA,
  pictureList: data
});
