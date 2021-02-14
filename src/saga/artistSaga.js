import { takeEvery } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import * as artistAPI from '../api/artist';
import {
  reducerUtils,
  handleAsyncActionsById,
  createPromiseSagaById,
  handleAsyncActions,
  createPromiseSaga
} from '../lib/asyncUtils';

// Action Types
const GET_ARTIST_DATA = 'artist/GET_ARTIST_DATA';
const GET_ARTIST_DATA_SUCCESS = 'artist/GET_ARTIST_DATA_SUCCESS';
const GET_ARTIST_DATA_ERROR = 'artist/GET_ARTIST_DATA_ERROR';

const GET_ARTIST_SEARCH_DATA = 'GET_ARTIST_SEARCH_DATA';
const GET_ARTIST_SEARCH_DATA_SUCCESS = 'GET_ARTIST_SEARCH_DATA_SUCCESS';
const GET_ARTIST_SEARCH_DATA_ERROR = 'GET_ARTIST_SEARCH_DATA_ERROR';

const INIT_ARTIST_SEARCH_LIST = 'INIT_ARTIST_SEARCH_LIST';

// Action Constructor
export const getArtistData = (id = 'artistList') => ({
  type: GET_ARTIST_DATA,
  payload: id,
  meta: id
});

export const getArtistSearchData = (input) => ({
  type: GET_ARTIST_SEARCH_DATA,
  payload: input,
  meta: input
});

export const initArtistSearchList = createAction(INIT_ARTIST_SEARCH_LIST);

// Create Sagas
const getArtistDataSaga = createPromiseSaga(GET_ARTIST_DATA, artistAPI.getArtistData);
const getArtistSearchDataSaga = createPromiseSagaById(GET_ARTIST_SEARCH_DATA, artistAPI.getArtistSearchData);

// Combine Sagas
export function * artistSaga () {
  yield takeEvery(GET_ARTIST_DATA, getArtistDataSaga);
  yield takeEvery(GET_ARTIST_SEARCH_DATA, getArtistSearchDataSaga);
}

// Initial State
const initialState = {
  artistList: reducerUtils.initial(),
  searchList: {}
};

// Reducer
export default function artist (state = initialState, action) {
  switch (action.type) {
    case GET_ARTIST_DATA:
    case GET_ARTIST_DATA_SUCCESS:
    case GET_ARTIST_DATA_ERROR:
      return handleAsyncActions(GET_ARTIST_DATA, 'artistList', true, true)(state, action);
    case GET_ARTIST_SEARCH_DATA:
    case GET_ARTIST_SEARCH_DATA_SUCCESS:
    case GET_ARTIST_SEARCH_DATA_ERROR:
      return handleAsyncActionsById(GET_ARTIST_SEARCH_DATA, 'searchList', true, true)(state, action);
    case INIT_ARTIST_SEARCH_LIST:
      return {
        ...state,
        searchList: reducerUtils.initial()
      };
    default:
      return state;
  }
};
