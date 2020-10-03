import React, { Component } from "react";

import FollowersStyles from "../styles/UserCardFollowers.styles";

class UserCardFollowers extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <FollowersStyles>
        {this.props.followers.map(({ avatar_url }) => {
          return (
            <>
              <img src={`${avatar_url}`} alt="follower avatar" />
            </>
          );
        })}
      </FollowersStyles>
    );
  }
}

export default UserCardFollowers;
