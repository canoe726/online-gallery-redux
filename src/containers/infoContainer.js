import { connect } from 'react-redux';

import AppInfo from '../components/ui/info/AppInfo';

import {
  initInfoData
} from '../actions/infoActions';

export const Info = connect(
  state => ({
    notice: state.info.notice,
    backgroundImages: state.info.backgroundImages
  }),
  dispatch => ({
    async initInfoData () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        dispatch(initInfoData(data));
      }
    }
  })
)(AppInfo);
