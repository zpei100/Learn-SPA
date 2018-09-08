import { combineReducers } from 'redux';
import BlogPosts from './reducer_BlogPosts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: BlogPosts,
  form: formReducer
});

export default rootReducer;
