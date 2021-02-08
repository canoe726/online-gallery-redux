import { takeEvery } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import * as exhibitionDetailAPI from '../api/exhibitionDetail';
import {
  reducerUtils,
  createPromiseSaga,
  handleAsyncActions
} from '../lib/asyncUtils';

// Action Types
const GET_EXHIBITION_DETAIL_DATA = 'exhibition-detail/GET_EXHIBITION_DETAIL_DATA';
const GET_EXHIBITION_DETAIL_DATA_SUCCESS = 'exhibition-detail/GET_EXHIBITION_DETAIL_DATA_SUCCESS';
const GET_EXHIBITION_DETAIL_DATA_ERROR = 'exhibition-detail/GET_EXHIBITION_DETAIL_DATA_ERROR';

const CHANGE_SLIDE_IDX = 'CHANGE_SLIDE_IDX';

const TOGGLE_MODAL = 'TOGGLE_MODAL';

// Action Constructor
export const getExhibitionDetailData = (id) => ({
  type: GET_EXHIBITION_DETAIL_DATA,
  payload: id,
  meta: id
});

export const changeSlideIdx = createAction(CHANGE_SLIDE_IDX);

export const toggleModal = createAction(TOGGLE_MODAL);

// Create Sagas
const getExhibitionDetailDataSaga = createPromiseSaga(GET_EXHIBITION_DETAIL_DATA, exhibitionDetailAPI.getExhibitionDetailData);

// Combine Sagas
export function * exhibitionDetailSaga () {
  yield takeEvery(GET_EXHIBITION_DETAIL_DATA, getExhibitionDetailDataSaga);
}

// Initial State
const initialState = {
  exhibitionDetailList: reducerUtils.initial(),
  slideIdx: 0,
  modalActive: 0
};

// Reducer
export default function exhibitionDetail (state = initialState, action) {
  switch (action.type) {
    case GET_EXHIBITION_DETAIL_DATA:
    case GET_EXHIBITION_DETAIL_DATA_SUCCESS:
    case GET_EXHIBITION_DETAIL_DATA_ERROR:
      return handleAsyncActions(GET_EXHIBITION_DETAIL_DATA, 'exhibitionDetailList', true, true)(state, action);
    case CHANGE_SLIDE_IDX:
      return {
        ...state,
        slideIdx: action.payload
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modalActive: action.payload
      };
    default:
      return state;
  }
};
