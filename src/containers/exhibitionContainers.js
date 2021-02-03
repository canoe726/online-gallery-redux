import { connect } from 'react-redux';

import Exhibition from '../components/ui/exhibition/Exhibition';

import {
  initExhibitionData,
  addExhibitionData,
  toggleIsFetching,
  toggleNoMoreData
} from '../modules/exhibitionModule';

import OG_API from '../api/onlineGalleryApiConstants';

// delete this
import DUMMY from '../data/dummy';

export const ExhibitionContainer = connect(
  state => ({
    exhibitionList: state.exhibition.exhibitionList,
    noMoreData: state.exhibition.noMoreData,
    isFetching: state.exhibition.isFetching
  }),
  dispatch => ({
    toggleIsFetching (isFetching) {
      dispatch(toggleIsFetching(isFetching));
    },
    toggleNoMoreData (noMoreData) {
      dispatch(toggleNoMoreData(noMoreData));
    },
    async initExhibitionData () {
      dispatch(toggleIsFetching(true));
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        // dispatch(initExhibitionData(data));
        // const data = null;
        if (data) {
          dispatch(initExhibitionData(DUMMY.INIT_EXHIBITION_DATA));
          dispatch(toggleIsFetching(false));
        } else {
          dispatch(toggleIsFetching(false));
          dispatch(toggleNoMoreData(true));
        }
      } else {
        dispatch(toggleIsFetching(true));
      }
    },
    async addExhibitionData () {
      dispatch(toggleIsFetching(true));
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        const data = await response.json();
        // console.log('data : ', data);
        // dispatch(addExhibitionData(data));
        // const data = null;
        if (data) {
          dispatch(addExhibitionData(DUMMY.ADD_EXHIBITION_DATA));
          dispatch(toggleIsFetching(false));
        } else {
          dispatch(toggleNoMoreData(true));
        }
      } else {
        dispatch(toggleIsFetching(true));
      }
    }
  })
)(Exhibition);
