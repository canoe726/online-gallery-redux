import C from '../constants/exhibitionConstants';

export const addExhibitionData = (data) => ({
  type: C.ADD_EXHIBITION_DATA,
  exhibitionList: data
});

export const toggleIsFetching = (isFetching) => ({
  type: C.TOGGLE_IS_FETCHING,
  isFetching: isFetching
});
