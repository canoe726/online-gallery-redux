import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './saga/index';
// import stateData from './data/initialState.json';

export const customHistory = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});

const middlewares = [
  ReduxThunk,
  sagaMiddleware,
  logger
];
const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

const storeFactory = () =>
  composedEnhancer(createStore)(
    rootReducer
  );

export default storeFactory;
