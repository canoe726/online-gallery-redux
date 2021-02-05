import { takeEvery } from 'redux-saga/effects';
import * as exhibitionAPI from '../api/exhibition';
import {
  reducerUtils,
  createPromiseSaga,
  handleAsyncActions
} from '../lib/asyncUtils';

// Action Types
const GET_EXHIBITION_DATA = 'exhibition/GET_EXHIBITION_DATA';
const GET_EXHIBITION_DATA_SUCCESS = 'exhibition/GET_EXHIBITION_DATA_SUCCESS';
const GET_EXHIBITION_DATA_ERROR = 'exhibition/GET_EXHIBITION_DATA_ERROR';

// Action Constructor
export const getExhibitionData = () => ({
  type: GET_EXHIBITION_DATA
});

// Create Sagas
const getExhibitionDataSaga = createPromiseSaga(GET_EXHIBITION_DATA, exhibitionAPI.getExhibitionData);

// Combine Sagas
export function * exhibitionSaga () {
  yield takeEvery(GET_EXHIBITION_DATA, getExhibitionDataSaga);
}

// Initial State
const initialState = {
  exhibitionList: reducerUtils.initial()
};

// Reducer
export default function exhibition (state = initialState, action) {
  switch (action.type) {
    case GET_EXHIBITION_DATA:
    case GET_EXHIBITION_DATA_SUCCESS:
    case GET_EXHIBITION_DATA_ERROR:
      return handleAsyncActions(GET_EXHIBITION_DATA, 'exhibitionList', true, true)(state, action);
    default:
      return state;
  }
};
