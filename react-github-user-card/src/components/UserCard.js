import React, { Component } from "react";

import UserCardStyles from "../styles/UserCard.styles";

class UserCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { login } = this.props.user;

    return (
      <UserCardStyles>
        <h3>{login}</h3>
      </UserCardStyles>
    );
  }
}

export default UserCard;
