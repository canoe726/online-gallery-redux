import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import stateData from './data/initialState.json';

import menu from './modules/menuModule';
import home from './modules/homeModule';
import info from './modules/infoModule';
import exhibition from './modules/exhibitionModule';
import exhibitionDetail from './modules/exhibitionDetailModule';
import artist from './modules/artistModule';
import artistDetail from './modules/artistDetailModule';
import notice from './modules/noticeModule';
import loading from './modules/loadingModule';
import error from './modules/errorModule';

const logger = store => next => action => {
  console.groupCollapsed('디스패칭', action.type);
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  const result = next(action);
  console.log('다음 상태', store.getState());
  console.groupEnd();
  return result;
};

const saver = store => next => action => {
  const result = next(action);
  return result;
};

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger, saver, thunk)(createStore)(
    combineReducers({
      menu,
      home,
      info,
      exhibition,
      exhibitionDetail,
      artist,
      artistDetail,
      notice,
      loading,
      error
    }),
    initialState
  );

export default storeFactory;
