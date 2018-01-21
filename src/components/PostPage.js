import React from "react";

class PostPage extends React.Component {
  componentDidMount() {
    this.props.getPostData(this.props.match.params.id);
  }

  postComments = () =>
    this.props.comments.map(comment => (
      <div key={comment.id}>{comment.message}</div>
    ));

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.content}</div>
        <div>{this.postComments()}</div>
      </div>
    );
  }
}

export default PostPage;
