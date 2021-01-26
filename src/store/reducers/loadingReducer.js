import C from '../../constants/loadingConstants';

export const loading = (state = {}, action) => {
  switch (action.type) {
    case C.TOGGLE_MASONRY_LOADING:
      return {
        ...state,
        masonryLoading: {
          isLoading: action.isLoading
        }
      };
    default:
      return state;
  }
};
