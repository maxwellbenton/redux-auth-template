import React from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Home extends React.Component {
  posts = () =>
    Object.keys(this.props.posts).map(post_id => (
      <PostCard
        key={post_id}
        {...this.props.users[this.props.posts[post_id].user]}
        user={this.props.posts[post_id].user}
        {...this.props.posts[post_id]}
      />
    ));

  render() {
    // console.log(this.props);
    return (
      <div ref={div => (this.homeComponent = div)}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "2fr 1fr",
            gridTemplateColumns: "auto",
            textAlign: "center"
          }}
        >
          <div style={{ fontSize: "500%", lineHeight: "1em" }}>
            Human Blog Site
          </div>
          <div style={{ fontSize: "150%", margin: "5px" }}>
            Welcome, Fellow Human
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",

              fontSize: "125%",
              margin: "10px"
            }}
          >
            <Link to="/">
              <div
                style={{ textAlign: "center", width: "125px", margin: "auto" }}
              >
                Human Posts
              </div>
            </Link>
            <Link to="/users">
              <div
                style={{ textAlign: "center", width: "125px", margin: "auto" }}
              >
                Human List
              </div>
            </Link>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {this.posts()}
        </div>
        <div
          style={{ margin: "1em auto", textAlign: "center" }}
          onClick={this.props.getPosts}
        >
          More Posts!
        </div>
      </div>
    );
  }
}

export default connect(({ authReducer, usersReducer, dataReducer }) => ({
  ...authReducer,
  ...usersReducer,
  ...dataReducer
}))(Home);
