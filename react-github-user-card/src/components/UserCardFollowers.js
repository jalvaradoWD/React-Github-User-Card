import React, { Component } from "react";

import FollowersStyles from "../styles/UserCardFollowers.styles";

class UserCardFollowers extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <FollowersStyles>
        {this.props.followers.map(({ avatar_url, login }) => {
          return (
            <>
              <a href={`http://github.com/${login}`}>
                <img src={`${avatar_url}`} alt="follower avatar" />
              </a>
            </>
          );
        })}
      </FollowersStyles>
    );
  }
}

export default UserCardFollowers;
