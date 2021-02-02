// Action Types
const INIT_INFO_DATA = 'info/INIT_INFO_DATA';

// Reducer
export default function reducers (state = {}, action) {
  switch (action.type) {
    case INIT_INFO_DATA:
      return {
        ...state,
        notice: action.notice
      };
    default:
      return state;
  }
};

// Action Constructor
export const initInfoData = (data) => ({
  type: INIT_INFO_DATA,
  notice: data
});
