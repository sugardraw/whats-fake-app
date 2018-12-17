import React, { Component } from "react";
import Header from "./Header";
import PostsBoard from "./PostsBoard";
import Users from "./Users";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      conversation: [],
      friendName: ""
    };
  }

  getConversation = (id, name) => {
    console.log("render conversation with" + id, name);
    axios.get(`http://localhost:3001/database/posts/${id}`).then(data => {
      console.log(data);
      this.setState({
        conversation: data.data,
        friendName: name
      });
    });
  };

  render() {
    return (
      <div className="container-fluid m-0 p-0">
        <Header />
        <div className="row">
          <Users getConversation={this.getConversation} />
          <PostsBoard
            conversation={this.state.conversation}
            friendName={this.state.friendName}
          />
        </div>
      </div>
    );
  }
}

export default App;
