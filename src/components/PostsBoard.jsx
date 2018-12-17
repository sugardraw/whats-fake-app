import React, { Component } from "react";
import axios from "axios";

class PostsBoard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="col-md-9 m-0 p-0">
         
      {this.props.friendName? (<h3>{this.props.friendName}'s chat</h3>):null}

        {this.props.conversation.map(conversation => {
          if (conversation.origin === "YOU") {
            console.log(conversation.title);
            return (
              <div
                id="talk-bubble-1"
                className="card position-relative my-3 shadow"
                style={{
                  maxWidth: "32rem",
                  marginLeft: "4vw",
                  backgroundColor: "rgb(230, 232, 199)"
                }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-2 text-muted">YOU</h5>
                  <p className="card-text">{conversation.body}</p>
                  <span
                    style={{
                      fontSize: "1.4rem",
                      color: "#fff",
                      position: "relative",
                      float:'right',
                      marginRight: '12px'
                    }}
                  >
                    &#10004;
                  </span>
                </div>
              </div>
            );
          } else {
            return (
              <div
                id="talk-bubble-2"
                className="card position-relative my-3 shadow"
                style={{
                  maxWidth: "32rem",
                  marginLeft: "37vw",
                  backgroundColor: "rgb(146, 172, 241)"
                }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-2 text-muted">
                    {this.props.friendName}
                  </h5>

                  <p className="card-text">{conversation.body}</p>

                  <span
                    style={{
                      fontSize: "1.4rem",
                      color: "#fff",
                      position: "relative",
                      float:'right',
                      marginRight: '12px'
                    }}
                  >
                    &#10004;
                  </span>
                </div>
              </div>
            );
          }
        })}
        <div
          style={{ position: "fixed", bottom: "0rem" }}
          className="input-group"
        >
          <input
            type="text"
            className="form-control ml-0"
            aria-label="messages-input"
            value="Write a message"
          />
        </div>
      </div>
    );
  }
}

export default PostsBoard;
