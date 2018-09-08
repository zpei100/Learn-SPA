import { FETCH_REQUEST } from '../actions/index.js';
import _ from 'lodash';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_REQUEST: {
      return _.mapKeys(action.payload.data, 'id');
    }
    default:
      return state;
  }
}
