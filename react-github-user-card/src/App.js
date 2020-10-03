import React, { Component } from "react";
import axios from "axios";

import sampleData from "./sample.json";

import UserCard from "./components/UserCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [sampleData],
    };
  }

  // componentDidMount = async () => {
  //   const res = await axios.get("https://api.github.com/users");

  //   this.setState({
  //     users: [...res.data],
  //   });
  // };

  render() {
    return (
      <>
        <h1>GitHub User Cards</h1>
        {this.state.users.map((user) => (
          <UserCard user={user} />
        ))}
      </>
    );
  }
}

export default App;
