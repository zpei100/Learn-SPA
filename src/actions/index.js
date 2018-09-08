export const FETCH_REQUEST = 'fetch_request';
const axios = require('axios');

const API_URL = 'http://reduxblog.herokuapp.com/api';
const query_string = '123random';

export default function() {
  const request = axios.get(`${API_URL}/posts?key=${query_string}`);

  return {
    type: FETCH_REQUEST,
    payload: request
  };
}
