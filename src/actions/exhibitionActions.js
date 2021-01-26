import C from '../constants/exhibitionConstants';

export const initExhibitionData = (data) => ({
  type: C.INIT_EXHIBITION_DATA,
  exhibitionList: data
});
