import React, { Component } from "react";

class User extends Component {
  openConversation = (e) => {
    console.log(`open conversation with: ${e.target.dataset.name}`);
    this.props.getConversation(e.target.dataset.id, e.target.dataset.name)
  };

  render() {
    return (
      <React.Fragment>
        {this.props.usersList.map((user,i) => (
          <div key={user.id} className="card" >
            <div className="card-body" data-name={user.name} data-id={user.id} onClick={this.openConversation}>
              <img
                src={`./images/profile-${i}.jpeg`}
                width="50"
                height="50"
                alt="contact"
                className="rounded-circle m-1 float-left "
              />
              <div
                style={{ marginLeft: "0rem", textAlign: "left" }}
                className="float-left px-3 py-1"
              >
                {user.name}
              </div>
              <div
                style={{
                  marginLeft: "0rem",
                  textAlign: "left",
                  color: " rgb(162, 153, 144)"
                }}
                className="float-left px-3 py-1"
              >
                Lorem ipsum dolor sit amet...
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default User;
