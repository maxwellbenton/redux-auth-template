import React from "react";
import PostCard from "./PostCard";
import Comment from "./Comment";
import { connect } from "react-redux";
import { getUserData } from "../actions";
class UserPage extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    // console.log(this.props);

    this.props.getUserData(this.props.match.params.id);
  }

  userPosts = () => {
    if (
      this.props.users[this.props.selectedUser] &&
      this.props.users[this.props.selectedUser].posts
    ) {
      return this.props.users[this.props.selectedUser].posts.map(post => (
        <PostCard
          key={post}
          {...this.props.posts[post]}
          {...this.props.users[this.props.user]}
        />
      ));
    } else {
      return [];
    }
  };

  userComments = () => {
    if (
      this.props.users[this.props.selectedUser] &&
      this.props.users[this.props.selectedUser].comments
    ) {
      return this.props.users[this.props.selectedUser].comments.map(comment => {
        return (
          <Comment
            key={comment}
            {...this.props.comments[comment]}
            {...this.props.users[this.props.user]}
          />
        );
      });
    } else {
      return [];
    }
  };

  render() {
    // console.log(this.props);
    // debugger;
    return (
      <div
        ref={div => (this.userPageComponent = div)}
        style={{ margin: "10px" }}
      >
        <div style={{ textAlign: "center", margin: "10px", height: "400px" }}>
          {this.props.users[this.props.selectedUser] ? (
            <img
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%"
              }}
              src={this.props.users[this.props.selectedUser].large_image}
              alt={this.props.users[this.props.selectedUser].large_image}
            />
          ) : null}

          <div style={{ fontSize: "250%" }}>{this.props.username}</div>
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

export default connect(
  ({ authReducer, usersReducer, dataReducer }) => ({
    ...authReducer,
    ...usersReducer,
    ...dataReducer
  }),
  {
    getUserData
  }
)(UserPage);
