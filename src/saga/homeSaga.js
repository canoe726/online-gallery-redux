import { takeEvery, getContext } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import * as homeAPI from '../api/home';
import {
  reducerUtils,
  createPromiseSaga,
  createPromiseSagaById,
  handleAsyncActions,
  handleAsyncActionsById
} from '../lib/asyncUtils';

// Action Types
const GET_HOME_BANNER = 'home/GET_HOME_BANNER';
const GET_HOME_BANNER_SUCCESS = 'home/GET_HOME_BANNER_SUCCESS';
const GET_HOME_BANNER_ERROR = 'home/GET_HOME_BANNER_ERROR';

const GET_HOME_EXHIBITION = 'home/GET_HOME_EXHIBITION';
const GET_HOME_EXHIBITION_SUCCESS = 'home/GET_HOME_EXHIBITION_SUCCESS';
const GET_HOME_EXHIBITION_ERROR = 'home/GET_HOME_EXHIBITION_ERROR';

const GET_HOME_ARTIST = 'home/GET_HOME_ARTIST';
const GET_HOME_ARTIST_SUCCESS = 'home/GET_HOME_ARTIST_SUCCESS';
const GET_HOME_ARTIST_ERROR = 'home/GET_HOME_ARTIST_ERROR';

const CHANGE_HOME_BANNER_IDX = 'home/CHANGE_HOME_BANNER_IDX';

const GO_NEXT_PAGE = 'GO_NEXT_PAGE';

// Action Constructor
export const getHomeBanner = (id = 'homeBanner') => ({
  type: GET_HOME_BANNER,
  payload: id,
  meta: id
});

export const getHomeExhibition = () => ({
  type: GET_HOME_EXHIBITION
});

export const getHomeArtist = () => ({
  type: GET_HOME_ARTIST
});

export const changeHomeBannerIdx = createAction(CHANGE_HOME_BANNER_IDX);

export const goNextPage = (url) => ({
  type: GO_NEXT_PAGE,
  payload: url
});

// Create Sagas
const getHomeBannerSaga = createPromiseSagaById(GET_HOME_BANNER, homeAPI.getHomeBanner);
const getHomeExhibitionSaga = createPromiseSaga(GET_HOME_EXHIBITION, homeAPI.getHomeExhibition);
const getHomeArtistSaga = createPromiseSaga(GET_HOME_ARTIST, homeAPI.getHomeArtist);
function * goNextPageSaga (url) {
  const history = yield getContext('history');
  history.push(url.payload);
};

// Combine Sagas
export function * homeSaga () {
  yield takeEvery(GET_HOME_BANNER, getHomeBannerSaga);
  yield takeEvery(GET_HOME_EXHIBITION, getHomeExhibitionSaga);
  yield takeEvery(GET_HOME_ARTIST, getHomeArtistSaga);
  yield takeEvery(GO_NEXT_PAGE, goNextPageSaga);
};

// Initial State
const initialState = {
  homeBanner: {
    homeBannerIdx: 0,
    homeBanner: reducerUtils.initial()
  },
  exhibition: reducerUtils.initial(),
  artist: reducerUtils.initial()
};

// Reducer
export default function home (state = initialState, action) {
  switch (action.type) {
    case GET_HOME_BANNER:
    case GET_HOME_BANNER_SUCCESS:
    case GET_HOME_BANNER_ERROR:
      return handleAsyncActionsById(GET_HOME_BANNER, 'homeBanner', true)(state, action);
    case GET_HOME_EXHIBITION:
    case GET_HOME_EXHIBITION_SUCCESS:
    case GET_HOME_EXHIBITION_ERROR:
      return handleAsyncActions(GET_HOME_EXHIBITION, 'exhibition', true)(state, action);
    case GET_HOME_ARTIST:
    case GET_HOME_ARTIST_SUCCESS:
    case GET_HOME_ARTIST_ERROR:
      return handleAsyncActions(GET_HOME_ARTIST, 'artist', true)(state, action);
    case CHANGE_HOME_BANNER_IDX:
      return {
        ...state,
        homeBanner: {
          ...state.homeBanner,
          homeBannerIdx: action.payload
        }
      };
    default:
      return state;
  }
};
