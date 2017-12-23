import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    _.map(this.props.posts, post => {
    return (
      <li className="list-group-item" key={post.id}>
      {post.title}
      </li>
    );
  });
}

  render(){
    return (
    <div>
      <h3> Posts </h3>
      <ul className="list-group">
        {this.renderPosts()}
      </ul>
    </div>
  )};
}

function mapStateToProps(state){
  return { posts: state.props };
}

// export default connect(null, { fetchPosts: fetchPosts })(PostIndex);
export default connect(mapStateToProps, { fetchPosts })(PostIndex);

// This makes it immediatly accesible the this.props.fetchPosts
