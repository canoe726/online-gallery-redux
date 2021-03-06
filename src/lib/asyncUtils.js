
import { delay, call, put } from 'redux-saga/effects';

// Common Initial State
export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
    isAllLoaded: false
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
    isAllLoaded: false
  }),
  success: (payload, isAllLoaded) => ({
    loading: false,
    data: payload,
    error: null,
    isAllLoaded: isAllLoaded
  }),
  error: error => ({
    loading: false,
    data: null,
    error: error,
    isAllLoaded: false
  })
};

// Create Promise Sagas
export const createPromiseSaga = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function * saga (action) {
    try {
      const payload = yield call(promiseCreator, action.payload);
      yield delay(500);
      yield put({ type: SUCCESS, payload });
    } catch (e) {
      yield put({ type: ERROR, payload: e, error: true });
    }
  };
};

// Create Promise Sagas
export const createPromiseSagaById = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function * saga (action) {
    const id = action.meta;
    try {
      const payload = yield call(promiseCreator, action.payload);
      yield delay(500);
      yield put({ type: SUCCESS, payload, meta: id });
    } catch (e) {
      yield put({ type: ERROR, payload: e, error: true, meta: id });
    }
  };
};

// Handle Async Actions
export const handleAsyncActions = (type, key, keepData = false, append = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null)
        };
      case SUCCESS:
        return append
          ? {
              ...state,
              [key]: !state[key].data
                ? reducerUtils.success(action.payload, action.payload && action.payload.length === 0)
                : {
                    loading: false,
                    data: state[key].data.concat(action.payload),
                    error: null,
                    isAllLoaded: action.payload && action.payload.length === 0
                  }
            }
          : {
              ...state,
              [key]: reducerUtils.success(action.payload, action.payload && action.payload.length === 0)
            };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload)
        };
      default:
        return state;
    }
  };
};

export const handleAsyncActionsById = (type, key, keepData = false, append = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    const id = action.meta;
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(keepData ? state[key][id] && state[key][id].data : null)
          }
        };
      case SUCCESS:
        return append
          ? {
              ...state,
              [key]: {
                ...state[key],
                [id]: !state[key][id].data
                  ? reducerUtils.success(action.payload, action.payload && action.payload.length === 0)
                  : {
                      loading: false,
                      data: state[key][id].data.concat(action.payload),
                      error: null,
                      isAllLoaded: action.payload && action.payload.length === 0
                    }
              }
            }
          : {
              ...state,
              [key]: {
                ...state[key],
                [id]: reducerUtils.success(action.payload, action.payload && action.payload.length === 0)
              }
            };
      case ERROR:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload)
          }
        };
      default:
        return state;
    }
  };
};
