import React, { Component } from "react";
import Header from "./Header";
import PostsBoard from "./PostsBoard";
import Users from "./Users";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lastMsg:null,
      conversation: [],
      friendName: ""
    };
  }



  getConversation = (id, name) => {
    console.log("render conversation with" + id, name);
    axios.get(`http://localhost:3001/database/posts/${id}`)
    .then(data => {
      console.log(data)
      let lastMsg = null;
      for (let i in data.data) {
        if (!data.data[i].hasOwnProperty("origin")) {
         
  
          lastMsg = data.data[i];
        }
      }
      console.log('#####',lastMsg)
      this.setState({
        conversation: data.data,
        friendName: name,
        lastMsg: lastMsg
      });
    })
    .catch(err=>console.log(err))

  };



  render() {
    return (
      <div className="container-fluid m-0 p-0">
        <Header />
        <div className="row">
          <Users getConversation={this.getConversation} conversation={this.state.conversation} lastMsg={this.state.lastMsg}/>
          <PostsBoard
            conversation={this.state.conversation}
            friendName={this.state.friendName}
            getConversation = {this.getConversation}
          />
        </div>
      </div>
    );
  }
}

export default App;
         
