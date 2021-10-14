import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";

import "./SignIn.scss";

export class SignIn extends Component {
  render() {
    return (
      <div className="SignIn_Container">
        <div className="SubContainer">
          <div className="Header">Ecommerce</div>
          <div className="SubHeader"> Sign In</div>
          <div className="SubSubHeader">Use Your Ecommerce Account</div>
          <div className="Form">
            <div className="UserName">
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                size="small"
                className="UserName_Input"
              />
            </div>
            <div className="Password">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="small"
                className="Password_Input"
              />
            </div>
            <div className="Button">
              <Button color="primary" className="SignUpButton">
                Sign up Instead
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="SignInButton"
              >
                Sign in
              </Button>
            </div>
            <div className="ForgetPassword">
              <Button color="primary" className="ForgetPButton">
                Forget Password
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
