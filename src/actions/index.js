export const FETCH_REQUEST = 'fetch_request';
const axios = require('axios');

export const API_URL = 'http://reduxblog.herokuapp.com/api';
export const query_string = 'zpei100';

export default function() {
  const request = axios.get(`${API_URL}/posts?key=${query_string}`);

  return {
    type: FETCH_REQUEST,
    payload: request
  };
}
