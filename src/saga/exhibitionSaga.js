import { takeEvery } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
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

const GET_EXHIBITION_SEARCH_DATA = 'GET_EXHIBITION_SEARCH_DATA';
const GET_EXHIBITION_SEARCH_DATA_SUCCESS = 'GET_EXHIBITION_SEARCH_DATA_SUCCESS';
const GET_EXHIBITION_SEARCH_DATA_ERROR = 'GET_EXHIBITION_SEARCH_DATA_ERROR';

const INIT_EXHIBITION_SEARCH_LIST = 'INIT_EXHIBITION_SEARCH_LIST';

// Action Constructor
export const getExhibitionData = () => ({
  type: GET_EXHIBITION_DATA
});

export const getExhibitionSearchData = (input) => ({
  type: GET_EXHIBITION_SEARCH_DATA,
  payload: input
});

export const initArtistSearchList = createAction(INIT_EXHIBITION_SEARCH_LIST);

// Create Sagas
const getExhibitionDataSaga = createPromiseSaga(GET_EXHIBITION_DATA, exhibitionAPI.getExhibitionData);
const getExhibitionSearchDataSaga = createPromiseSaga(GET_EXHIBITION_SEARCH_DATA, exhibitionAPI.getExhibitionSearchData);

// Combine Sagas
export function * exhibitionSaga () {
  yield takeEvery(GET_EXHIBITION_DATA, getExhibitionDataSaga);
  yield takeEvery(GET_EXHIBITION_SEARCH_DATA, getExhibitionSearchDataSaga);
}

// Initial State
const initialState = {
  exhibitionList: reducerUtils.initial(),
  searchList: reducerUtils.initial()
};

// Reducer
export default function exhibition (state = initialState, action) {
  switch (action.type) {
    case GET_EXHIBITION_DATA:
    case GET_EXHIBITION_DATA_SUCCESS:
    case GET_EXHIBITION_DATA_ERROR:
      return handleAsyncActions(GET_EXHIBITION_DATA, 'exhibitionList', true, true)(state, action);
    case GET_EXHIBITION_SEARCH_DATA:
    case GET_EXHIBITION_SEARCH_DATA_SUCCESS:
    case GET_EXHIBITION_SEARCH_DATA_ERROR:
      return handleAsyncActions(GET_EXHIBITION_SEARCH_DATA, 'searchList', true, true)(state, action);
    case INIT_EXHIBITION_SEARCH_LIST:
      return {
        ...state,
        searchList: reducerUtils.initial()
      };
    default:
      return state;
  }
};
