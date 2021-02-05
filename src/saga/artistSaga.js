import { takeEvery } from 'redux-saga/effects';
import * as artistAPI from '../api/artist';
import {
  reducerUtils,
  createPromiseSaga,
  handleAsyncActions
} from '../lib/asyncUtils';

// Action Types
const GET_ARTIST_DATA = 'artist/GET_ARTIST_DATA';
const GET_ARTIST_DATA_SUCCESS = 'artist/GET_ARTIST_DATA_SUCCESS';
const GET_ARTIST_DATA_ERROR = 'artist/GET_ARTIST_DATA_ERROR';

// Action Constructor
export const getArtistData = () => ({
  type: GET_ARTIST_DATA
});

// Create Sagas
const getArtistDataSaga = createPromiseSaga(GET_ARTIST_DATA, artistAPI.getArtistData);

// Combine Sagas
export function * artistSaga () {
  yield takeEvery(GET_ARTIST_DATA, getArtistDataSaga);
}

// Initial State
const initialState = {
  artistList: reducerUtils.initial()
};

// Reducer
export default function artist (state = initialState, action) {
  switch (action.type) {
    case GET_ARTIST_DATA:
    case GET_ARTIST_DATA_SUCCESS:
    case GET_ARTIST_DATA_ERROR:
      return handleAsyncActions(GET_ARTIST_DATA, 'artistList', true, true)(state, action);
    default:
      return state;
  }
};
