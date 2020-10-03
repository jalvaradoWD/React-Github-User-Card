import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount = async () => {
    const res = await axios.get("https://api.github.com/users");

    this.setState({
      users: [...res.data],
    });
  };

  render() {
    return (
      <>
        <h1>GitHub User Cards</h1>
        <ul>
          {this.state.users.map((user) => (
            <li>{user.login}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
