import { combineReducers } from 'redux';
import BlogPosts from './reducer_BlogPosts'

const rootReducer = combineReducers({
  posts: BlogPosts
});

export default rootReducer;
