import C from '../../constants/infoConstants';

export const info = (state = {}, action) => {
  switch (action.type) {
    case C.INIT_INFO_DATA:
      return {
        ...state,
        // notice: action.notice
        notice: '이것은 홈페이지 소개 테스트 글입니다.'
      };
    default:
      return state;
  }
};
