import { FETCH_REQUEST } from '../actions/index.js';
import { DELETE_POST } from '../actions/deletePost.js';
import _ from 'lodash';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_REQUEST: {
      return _.mapKeys(action.payload.data, 'id');
    }
    case DELETE_POST:
      {
        var result = {};
        Object.keys(state).forEach(function(id) {
          if (id !== action.payload.data.id.toString()) {
            result[id] = state[id];
          }
        });
        return result;
      }
  }

  return state;
}
