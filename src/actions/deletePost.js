import { API_URL, query_string} from './index.js';
import axios from 'axios';

export const DELETE_POST = 'delete_post';

export default function(id) {
  
  const deletedPost = axios.delete(`${API_URL}/posts/${id}`)

  return {
    type: DELETE_POST,
    payload: deletedPost
  }
}