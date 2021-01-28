import C from '../constants/exhibitionConstants';

export const initExhibitionData = (data) => ({
  type: C.INIT_EXHIBITION_DATA,
  exhibitionList: data
});

export const addExhibitionData = (data) => ({
  type: C.ADD_EXHIBITION_DATA,
  exhibitionList: data
});

export const toggleIsFetching = (isFetching) => ({
  type: C.TOGGLE_IS_FETCHING,
  isFetching: isFetching
});

export const toggleNoMoreData = (noMoreData) => ({
  type: C.TOGGLE_NO_MORE_DATA,
  noMoreData: noMoreData
});
