import React from "react";
import PostCard from "./PostCard";
import Comment from "./Comment";
class Profile extends React.Component {
  // componentDidMount() {
  //   console.log(this.props.match.params.id);
  //   // console.log(this.props);
  //   this.props.getUserData(this.props.match.params.id);
  // }

  userPosts = () =>
    this.props.user.posts.map(post => <PostCard key={post.id} {...post} />);
  userComments = () =>
    this.props.user.comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ));

  render() {
    return (
      <div
        ref={div => (this.userPageComponent = div)}
        style={{ margin: "10px" }}
      >
        <div style={{ textAlign: "center", margin: "10px", height: "400px" }}>
          <img
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%"
            }}
            src={this.props.user.large_image}
            alt={this.props.user.large_image}
          />
          <div style={{ fontSize: "250%" }}>{this.props.user.username}</div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr"
          }}
        >
          <div>
            <div style={{ textAlign: "center", fontSize: "150%" }}>Posts</div>
            {this.userPosts()}
          </div>
          <div>
            <div style={{ textAlign: "center", fontSize: "150%" }}>
              Comments
            </div>
            {this.userComments()}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
