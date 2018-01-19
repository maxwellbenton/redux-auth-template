import React from "react";
import { Link } from "react-router-dom";

const UserCard = props => {
  return (
    <div
      style={{
        border: "1px grey",
        margin: "auto",
        background: "#eee",
        width: "300px",
        height: "370px"
      }}
    >
      <Link
        to={`/users/${props.id}`}
        style={{ display: "grid", gridTemplateRows: "auto 70px" }}
      >
        <img
          style={{ float: "left" }}
          src={props.large_image}
          alt={props.large_image}
        />

        <div
          style={{
            display: "grid",
            gridTemplateRows: "40px 30px",

            background: "#CCF"
          }}
        >
          <div style={{ fontSize: "125%", overflow: "hidden", margin: "auto" }}>
            {props.username}
          </div>
          <div style={{ overflow: "hidden", margin: "auto" }}>
            <p>{props.isbn}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
