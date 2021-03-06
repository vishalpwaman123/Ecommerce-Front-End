import React, { Component } from "react";
import Header from "./Header";
import "./AdminDashBoard.scss";

export class AdminDashBoard extends Component {
  constructor() {
    super();
    this.state = {
      user: "Admin",
      DrawerFlag: false,
    };
  }

  SetDrawer = (Flag) => {
    console.log("Flag : ", Flag);
    this.setState({ DrawerFlag: !Flag });
  };
  render() {
    return (
      <div className="AdminDashBoard_Container">
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

export default AdminDashBoard;
