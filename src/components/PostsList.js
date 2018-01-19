import React from "react";

class PostsPage extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  postsList = () =>
    this.props.posts.map(post => (
      <div key={post.id}>
        <div>{post.title}</div>
        <div>{post.user_id}</div>
        <div>{post.content}</div>
      </div>
    ));

  render() {
    console.log(this.props);
    return <div>{this.postsList()}</div>;
  }
}

export default PostsPage;
