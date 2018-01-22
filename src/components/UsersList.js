import React from "react";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
class UserList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  usersList = () =>
    this.props.users.map(user => <UserCard key={user.id} {...user} />);

  render() {
    console.log(this.props);
    return (
      <div>
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
        <div
          ref={div => (this.userListComponent = div)}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
        >
          {this.usersList()}
        </div>
        <div
          style={{ margin: "1em auto", textAlign: "center" }}
          onClick={this.props.getUsers}
        >
          More Users!
        </div>
      </div>
    );
  }
}

export default UserList;
