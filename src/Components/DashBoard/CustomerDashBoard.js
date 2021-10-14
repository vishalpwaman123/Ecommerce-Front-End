import React, { Component } from "react";
import Header from "./Header.js";
import "./CustomerDashBoard.scss";
export class CustomerDashBoard extends Component {
  constructor() {
    super();
    this.state = {
      user: "User",
      DrawerFlag: false,
    };
  }

  SetDrawer = (Flag) => {
    console.log("Flag : ", Flag);
    this.setState({ DrawerFlag: !Flag });
  };

  render() {
    console.log(this.state);
    return (
      <div className="CustomerDashBoard_Container">
        <div className="SubContainer">
          <div className="Header">
            <Header data={this.state} dataFunction={this.SetDrawer} />
          </div>
          <div className="DashBoardBody">
            <div
              className={!this.state.DrawerFlag ? "Drawer1" : "Drawer2"}
            ></div>
            <div className={!this.state.DrawerFlag ? "Body1" : "Body2"}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerDashBoard;
