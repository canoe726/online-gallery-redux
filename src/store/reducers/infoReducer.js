import C from '../../constants/infoConstants';

export const info = (state = {}, action) => {
  switch (action.type) {
    case C.INIT_INFO_DATA:
      return {
        ...state,
        notice: action.notice
      };
    default:
      return state;
  }
};
