import React from "react";
import PostCard from "./PostCard";
class Home extends React.Component {
  posts = () =>
    this.props.posts.map(post => <PostCard key={post.id} {...post} />);

  render() {
    return (
      <div ref={div => (this.homeComponent = div)}>
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
