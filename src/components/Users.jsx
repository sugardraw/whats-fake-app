import React, { Component } from "react";
import User from "./User";
import axios from "axios";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      usersList: []
    };
  }

  componentWillMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(data => {
        this.setState({ usersList: data.data });

        /**
         * set
         * a
         * start
         * conversation
         * */

        this.props.getConversation(1, "Leanne Graham");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div
        className="col-md-3 m-0 p-0"
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          overflowY: "auto",
          height: "1000px"
        }}
      >
        <div
          id="contacts"
          style={{
            backgroundColor: "rgb(247, 246, 246)"
          }}
          className="card"
        >
          <div className="card-body">
            <img
              src="./images/avatar.png"
              width="50"
              height="50"
              alt="contact"
              className="float-left rounded-circle m-1"
            />
            YOU
            <div id="personal-settings">
              <button
                className="float-right btn"
                style={{
                  fontSize: "1.8rem",
                  color: "grey",
                  backgroundColor: "rgb(247, 246, 246)",
                  position: "relative",
                  top: "0rem",
                  marginLeft: "1.6rem"
                }}
              >
                ...
              </button>
              <button
                className="float-right btn"
                style={{
                  fontSize: "1.8rem",
                  color: "grey",
                  backgroundColor: "rgb(247, 246, 246)",
                  position: "relative",
                  top: "0rem"
                }}
              >
                <div
                  style={{
                    fontSize: "1.8rem",
                    color: "grey",
                    position: "relative",
                    top: "0.51rem"
                  }}
                >
                  {" "}
                  &#128929;
                </div>
              </button>
            </div>
          </div>
        </div>

        <User
          lastMsg={this.props.lastMsg}
          getConversation={this.props.getConversation}
          usersList={this.state.usersList}
          conversation={this.props.conversation}
        />
      </div>
    );
  }
}

export default Users;
