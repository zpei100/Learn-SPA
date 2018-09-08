import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';

import NewPost from './components/NewPost';
import BlogPosts from './components/BlogPosts';
import reducers from './reducers';
import reduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <BrowserRouter>
        <div>
          <Route path='/home' component={BlogPosts}></Route>
          <Route path='/new' component={NewPost}></Route> 
        </div>
      </BrowserRouter>
    </div>
  </Provider>
  , document.querySelector('.container'));
