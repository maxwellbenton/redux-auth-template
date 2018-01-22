import React from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";
class Home extends React.Component {
  posts = () =>
    this.props.posts.map(post => <PostCard key={post.id} {...post} />);

  render() {
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
          <div style={{ fontSize: "500%" }}>Human Blog Site</div>
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

export default Home;
