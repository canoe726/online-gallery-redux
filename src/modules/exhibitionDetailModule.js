// Action Types
const CHANGE_SLIDE_IDX = 'exhibition-detail/CHANGE_SLIDE_IDX';
const TOGGLE_MODAL = 'exhibition-detail/TOGGLE_MODAL';
const INIT_EXHIBITION_DETAIL_DATA = 'exhibition-detail/INIT_EXHIBITION_DETAIL_DATA';
const INIT_PICTURE_DATA = 'exhibition-detail/INIT_PICTURE_DATA';

// Reducer
const exhibitionDetailList = (state, action) => {
  switch (action.type) {
    case INIT_EXHIBITION_DETAIL_DATA:
      return action.exhibitionDetailList;
    default :
      return state;
  }
};

const pictureList = (state, action) => {
  switch (action.type) {
    case INIT_PICTURE_DATA:
      return [
        action.pictureList
      ];
    default :
      return state;
  }
};

export default function exhibitionDetail (state = {}, action) {
  switch (action.type) {
    case CHANGE_SLIDE_IDX:
      return {
        ...state,
        slideIdx: action.slideIdx
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modalActive: action.modalActive
      };
    case INIT_EXHIBITION_DETAIL_DATA:
      return {
        ...state,
        exhibitionDetailList: exhibitionDetailList(state.exhibitionDetailList, action)
      };
    case INIT_PICTURE_DATA:
      return {
        ...state,
        pictureList: pictureList(state.pictureList, action)
      };
    default:
      return state;
  }
};

// Action Constructor
export const changeSlideIdx = (idx) => ({
  type: CHANGE_SLIDE_IDX,
  slideIdx: idx
});

export const toggleModal = (modalActive) => ({
  type: TOGGLE_MODAL,
  modalActive: modalActive
});

export const initExhibitionDetailData = (data) => ({
  type: INIT_EXHIBITION_DETAIL_DATA,
  exhibitionDetailList: data
});

export const initPictureData = (data) => ({
  type: INIT_PICTURE_DATA,
  pictureList: data
});
