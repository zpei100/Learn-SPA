import React, { Component } from 'react';
import getBlogPost from '../actions/index.js';
import deletePost from '../actions/deletePost.js';
import { connect } from 'react-redux';
import _ from 'lodash';
import { API_URL, query_string } from '../actions/index.js';
import axios from 'axios';
import { bindActionCreaters, bindActionCreators } from 'redux';

class BlogPosts extends Component {
  constructor() {
    super();
  }

  getPosts() {
    this.props.getBlogPost();
  }

  componentDidMount() {
    this.getPosts();
  }

  handleDelete(id) {
    this.props.deletePost(id);
  }

  renderPosts() {
    const _this = this;
    return _.map(this.props.posts, function(post) {
      return (
        <li className="list-group-item bg-light" key={post.id}>
          Blog title: {post.title} Category: {post.categories} Content:{' '}
          {post.content}
          <button
            onClick={function() {
              _this.handleDelete(post.id);
            }}
          >
            Whatever
          </button>
        </li>
      );
    });
  }

  createPost(event) {
    //how do i access value for title input field?
  }

  render() {
    return (
      <div>
        <h3>Blog Posts</h3>
        <button
          className="mb-5"
          onClick={this.getPosts.bind(this)}
          type="submit"
          value="submit"
        >
          {' '}
          Submit{' '}
        </button>
        <ul className="list-group">{this.renderPosts.bind(this)()}</ul>
        <a className="btn btn-primary" href="/new">
          Add a new post
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapActionsToProps(dispatch) {
  return bindActionCreators({
    getBlogPost: getBlogPost,
    deletePost: deletePost
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(BlogPosts);
