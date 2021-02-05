import { takeEvery } from 'redux-saga/effects';
import * as noticeAPI from '../api/notice';
import {
  reducerUtils,
  createPromiseSaga,
  handleAsyncActions
} from '../lib/asyncUtils';

// Action Types
const GET_NOTICE_DATA = 'menu/GET_NOTICE_DATA';
const GET_NOTICE_DATA_SUCCESS = 'menu/GET_NOTICE_DATA_SUCCESS';
const GET_NOTICE_DATA_ERROR = 'menu/GET_NOTICE_DATA_ERROR';

// Action Constructor
export const getNoticeData = () => ({
  type: GET_NOTICE_DATA
});

// Create Sagas
const getNoticeDataSaga = createPromiseSaga(GET_NOTICE_DATA, noticeAPI.getNoticeData);

// Combine Sagas
export function * noticeSaga () {
  yield takeEvery(GET_NOTICE_DATA, getNoticeDataSaga);
};

// Initial State
const initialState = {
  notice: reducerUtils.initial()
};

// Reducer
export default function menu (state = initialState, action) {
  switch (action.type) {
    case GET_NOTICE_DATA:
    case GET_NOTICE_DATA_SUCCESS:
    case GET_NOTICE_DATA_ERROR:
      return handleAsyncActions(GET_NOTICE_DATA, 'notice', true)(state, action);
    default:
      return state;
  }
};
