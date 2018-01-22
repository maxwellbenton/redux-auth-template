import React from "react";
import { withRouter, Link } from "react-router-dom";
// import Comment from "./Comment";
const PostCard = props => {
  // const comments = () =>
  //   props.comments.map(comment => <Comment key={comment.id} {...comment} />);

  let userdata = props.user ? { ...props.user } : { ...props };

  return (
    <div style={{ border: "1px grey", margin: "5px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "20% 80%",
          height: "50px",
          lineHeight: "50px",
          background: "#CCF"
        }}
      >
        <Link to={`/users/${props.id}`}>
          <img
            style={{ float: "left" }}
            src={userdata.small_image}
            alt={userdata.small_image}
          />
        </Link>
        <Link to={`/users/${userdata.id}`} style={{ overflow: "hidden" }}>
          <div style={{ fontSize: "125%", overflow: "hidden" }}>
            {props.title}
          </div>
        </Link>
      </div>
      <Link to={`/users/${userdata.id}`}>
        <div>
          <p>{props.content}</p>
        </div>

        <div style={{ display: "grid" }}>{props.comments.length}</div>
      </Link>
    </div>
  );
};

export default withRouter(PostCard);
