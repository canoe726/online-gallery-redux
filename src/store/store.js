import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import stateData from '../data/initialState.json';

import { menu } from './reducers/menuReducer';
import { home } from './reducers/homeReducer';
import { info } from './reducers/infoReducer';
import { exhibition } from './reducers/exhibitionReducer';
import { exhibitionDetail } from './reducers/exhibitionDetailReducer';
import { artist } from './reducers/artistReducer';
import { notice } from './reducers/noticeReducer';
import { loading } from './reducers/loadingReducer';
import { error } from './reducers/errorReducer';

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
      notice,
      loading,
      error
    }),
    initialState
  );

export default storeFactory;
