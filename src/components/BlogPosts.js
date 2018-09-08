import React, { Component } from 'react';
import getBlogPost from '../actions/index.js';
import { connect } from 'react-redux';
import _ from 'lodash';

class BlogPosts extends Component {
  getPosts() {
    this.props.getBlogPost();
  }

  componentDidMount() {
    this.getPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, function(post) {
      return (
        <li className="list-group-item bg-primary" key={post.id}>
          {post.id}, {post.title}, {post.categories}, {post.content}
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
        <ul className="list-group">{this.renderPosts()}</ul>
        <a className="btn btn-primary" href="/new"></a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { getBlogPost }
)(BlogPosts);
