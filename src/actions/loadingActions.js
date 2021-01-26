import C from '../constants/loadingConstants';

export const toggleMasonryLoading = (isLoading) => ({
  type: C.TOGGLE_MASONRY_LOADING,
  isLoading: isLoading
});
