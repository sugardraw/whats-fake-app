import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(255, 234, 236)", height: "3.4rem" }}>
        <div style={{ paddingLeft: "1rem" }} id="logo">
          <img
            style={{
              position: "relative",
              top: "0.16rem"
            }}
            className="m-2"
            width="30"
            height="30"
            src="./images/whatsapp-logo-transparent.png"
            alt="logo"
          />
          <span
            style={{
              position: "relative",
              top: "0.34rem"
            }}
          >
            Whats<em>Fake</em>App
          </span>
          <div className="window-buttons float-right">
            <button
              className="btn"
              style={{ backgroundColor: "rgb(255, 234, 236)" }}
            >
              <span style={{ fontSize: "1rem", color: "grey" }}>&#128469;</span>
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "rgb(255, 234, 236)" }}
            >
              <span
                style={{
                  fontSize: "1rem",
                  color: "grey",
                  position: "relative",
                  top: "0.1rem"
                }}
              >
                &#128470;
              </span>
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "rgb(255, 234, 236)" }}
            >
              <span
                style={{
                  fontSize: "1.4rem",
                  color: "grey",
                  position: "relative",
                  top: "0.16rem"
                }}
              >
                &times;
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
