import C from '../../constants/exhibitionDetailConstants';

export const exhibitionDetailList = (state, action) => {
  switch (action.type) {
    case C.INIT_EXHIBITION_DETAIL_DATA:
      return [
        action.exhibitionDetailList
      ];
    default :
      return state;
  }
};

export const pictureList = (state, action) => {
  switch (action.type) {
    case C.INIT_PICTURE_DATA:
      return [
        action.pictureList
      ];
    default :
      return state;
  }
};

export const exhibitionDetail = (state = {}, action) => {
  switch (action.type) {
    case C.CHANGE_SLIDE_IDX:
      return {
        ...state,
        slideIdx: action.slideIdx
      };
    case C.INIT_EXHIBITION_DETAIL_DATA:
      return {
        ...state,
        exhibitionDetailList: exhibitionDetailList(state.exhibitionDetailList, action)
      };
    case C.INIT_PICTURE_DATA:
      return {
        ...state,
        pictureList: pictureList(state.pictureList, action)
      };
    default:
      return state;
  }
};
