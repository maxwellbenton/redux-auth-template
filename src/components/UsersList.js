import React from "react";
import UserCard from "./UserCard";

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
