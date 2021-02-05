import { takeEvery } from 'redux-saga/effects';
import * as infoAPI from '../api/info';
import {
  reducerUtils,
  createPromiseSaga,
  handleAsyncActions
} from '../lib/asyncUtils';

// Action Types
const GET_INFO_DATA = 'info/GET_INFO_DATA';
const GET_INFO_DATA_SUCCESS = 'info/GET_INFO_DATA_SUCCESS';
const GET_INFO_DATA_ERROR = 'info/GET_INFO_DATA_ERROR';

// Action Constructor
export const getInfoData = () => ({
  type: GET_INFO_DATA
});

// Create Sagas
const getInfoDataSaga = createPromiseSaga(GET_INFO_DATA, infoAPI.getInfoData);

// Combine Sagas
export function * infoSaga () {
  yield takeEvery(GET_INFO_DATA, getInfoDataSaga);
}

// Initial State
const initialState = {
  notice: reducerUtils.initial(),
  backgroundImages: [
    '/samples/info1.jpg',
    '/samples/info2.jpg',
    '/samples/info3.jpg'
  ]
};

// Reducer
export default function info (state = initialState, action) {
  switch (action.type) {
    case GET_INFO_DATA:
    case GET_INFO_DATA_SUCCESS:
    case GET_INFO_DATA_ERROR:
      return handleAsyncActions(GET_INFO_DATA, 'notice', true)(state, action);
    default:
      return state;
  }
};
