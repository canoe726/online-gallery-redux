import { connect } from 'react-redux';

import Info from '../components/ui/info/Info';

import {
  initInfoData
} from '../modules/infoModule';

import OG_API from '../api/onlineGalleryApiConstants';

// delete this
import DUMMY from '../data/dummy';

export const InfoContainer = connect(
  state => ({
    notice: state.info.notice,
    backgroundImages: state.info.backgroundImages
  }),
  dispatch => ({
    async initInfoData () {
      const response = await fetch(OG_API.SAMPLE);
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        dispatch(initInfoData(DUMMY.INFO_DATA));
      }
    }
  })
)(Info);
