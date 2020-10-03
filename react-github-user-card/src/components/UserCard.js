import React, { Component } from "react";

import axios from "axios";

import UserCardFollowers from "./UserCardFollowers";

import UserCardStyles from "../styles/UserCard.styles";

class UserCard extends Component {
  constructor(props) {
    super();
    this.state = {
      userFollowers: [],
    };
  }

  // componentDidMount = async () => {
  //   const res = await axios.get(this.props.user.followers_url);
  //   this.setState({
  //     userFollowers: [...res.data],
  //   });
  // };

  render() {
    const { login, avatar_url } = this.props.user;

    return (
      <UserCardStyles>
        <h3>{login}</h3>
        <img className="userAvatar" src={avatar_url} alt={`${login} avatar`} />
        <UserCardFollowers followers={this.state.userFollowers} />
      </UserCardStyles>
    );
  }
}

export default UserCard;
