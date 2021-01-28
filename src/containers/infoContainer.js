import { connect } from 'react-redux';

import AppInfo from '../components/ui/info/AppInfo';

import {
  initInfoData
} from '../actions/infoActions';

import OG_API from '../constants/onlineGalleryApiConstants';

// delete this
import DUMMY from '../data/dummy';

export const Info = connect(
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
)(AppInfo);
