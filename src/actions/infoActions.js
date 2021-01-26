import C from '../constants/infoConstants';

export const initInfoData = (data) => ({
  type: C.INIT_INFO_DATA,
  notice: data
});
