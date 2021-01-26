import { connect } from 'react-redux';

import AppExhibition from '../components/ui/exhibition/AppExhibition';

import {
  initExhibitionData
} from '../actions/exhibitionActions';

export const Exhibition = connect(
  state => ({
    exhibitionList: state.exhibition.exhibitionList
  }),
  dispatch => ({
    async initExhibitionData () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        dispatch(initExhibitionData(data));
      }
    }
  })
)(AppExhibition);
