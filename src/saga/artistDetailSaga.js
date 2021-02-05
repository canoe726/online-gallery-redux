import { takeEvery } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import * as artistDetailAPI from '../api/artistDetail';
import {
  reducerUtils,
  createPromiseSaga,
  handleAsyncActions
} from '../lib/asyncUtils';

// Action Types
const GET_ARTIST_DETAIL_DATA = 'artist-detail/GET_ARTIST_DETAIL_DATA';
const GET_ARTIST_DETAIL_DATA_SUCCESS = 'artist-detail/GET_ARTIST_DETAIL_DATA_SUCCESS';
const GET_ARTIST_DETAIL_DATA_ERROR = 'artist-detail/GET_ARTIST_DETAIL_DATA_ERROR';

const GET_ARTIST_DETAIL_PICTURE_DATA = 'artist-detail/GET_ARTIST_DETAIL_PICTURE_DATA';
const GET_ARTIST_DETAIL_PICTURE_DATA_SUCCESS = 'artist-detail/GET_ARTIST_DETAIL_PICTURE_DATA_SUCCESS';
const GET_ARTIST_DETAIL_PICTURE_DATA_ERROR = 'artist-detail/GET_ARTIST_DETAIL_PICTURE_DATA_ERROR';

const CHANGE_SLIDE_IDX = 'CHANGE_SLIDE_IDX';

const TOGGLE_MODAL = 'TOGGLE_MODAL';

// Action Constructor
export const getArtistDetailData = () => ({
  type: GET_ARTIST_DETAIL_DATA
});

export const getArtistDetailPictureData = () => ({
  type: GET_ARTIST_DETAIL_PICTURE_DATA
});

export const changeSlideIdx = createAction(CHANGE_SLIDE_IDX);

export const toggleModal = createAction(TOGGLE_MODAL);

// Create Sagas
const getArtistDetailDataSaga = createPromiseSaga(GET_ARTIST_DETAIL_DATA, artistDetailAPI.getArtistDetailData);
const getArtistDetailPictureDataSaga = createPromiseSaga(GET_ARTIST_DETAIL_PICTURE_DATA, artistDetailAPI.getArtistDetailPictureData);

// Combine Sagas
export function * artistDetailSaga () {
  yield takeEvery(GET_ARTIST_DETAIL_DATA, getArtistDetailDataSaga);
  yield takeEvery(GET_ARTIST_DETAIL_PICTURE_DATA, getArtistDetailPictureDataSaga);
}

// Initial State
const initialState = {
  artistDetailList: reducerUtils.initial(),
  artistDetailPictureList: reducerUtils.initial()
};

// Reducer
export default function artistDetail (state = initialState, action) {
  switch (action.type) {
    case GET_ARTIST_DETAIL_DATA:
    case GET_ARTIST_DETAIL_DATA_SUCCESS:
    case GET_ARTIST_DETAIL_DATA_ERROR:
      return handleAsyncActions(GET_ARTIST_DETAIL_DATA, 'artistDetailList', true)(state, action);
    case GET_ARTIST_DETAIL_PICTURE_DATA:
    case GET_ARTIST_DETAIL_PICTURE_DATA_SUCCESS:
    case GET_ARTIST_DETAIL_PICTURE_DATA_ERROR:
      return handleAsyncActions(GET_ARTIST_DETAIL_PICTURE_DATA, 'artistDetailPictureList', true, true)(state, action);
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
