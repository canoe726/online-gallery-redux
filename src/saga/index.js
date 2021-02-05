import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import home, { homeSaga } from './homeSaga';
import menu from './menuSaga';
import info, { infoSaga } from './infoSaga';
import exhibition, { exhibitionSaga } from './exhibitionSaga';
import exhibitionDetail, { exhibitionDetailSaga } from './exhibitionDetailSaga';
import artist, { artistSaga } from './artistSaga';
import artistDetail, { artistDetailSaga } from './artistDetailSaga';

const rootReducer = combineReducers({
  home,
  menu,
  info,
  exhibition,
  exhibitionDetail,
  artist,
  artistDetail
});

export function * rootSaga () {
  yield all(
    [
      homeSaga(),
      infoSaga(),
      exhibitionSaga(),
      exhibitionDetailSaga(),
      artistSaga(),
      artistDetailSaga()
    ]
  );
}

export default rootReducer;
