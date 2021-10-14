import React, { Component } from "react";
import { Checkbox, Button, TextField } from "@material-ui/core";

import account from "./../../Asserts/account.svg";
import "./SignUp.scss";

export class SignUp extends Component {
  render() {
    return (
      <div className="SignUp_Container">
        <div className="SubContainer">
          <div className="Box1">
            <div className="HeaderName">Ecommerce</div>
            <div className="SubHeader">Create Your Ecommerce Account</div>
            <div className="Form">
              <div className="Input1">
                <div className="UserName">
                  <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="MobileNumber">
                  <TextField
                    id="outlined-basic"
                    label="Mobile Number"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="EmailID">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
              <div className="EmailHelperText">
                You can use letters, numbers & periods
              </div>
              <div className="Input2">
                <div className="Password">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="ConfirmPasword">
                  <TextField
                    id="outlined-basic"
                    label="Confirm"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="PasswordHelperText">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </div>
              <div className="ShowPassword">
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <div className="ShowPasswordText">Show Password</div>
              </div>
              <div className="Action_Button">
                <Button color="primary" className="SignInButton">
                  Sign in Instead
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="SignUpButton"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
          <div className="Box2">
            <img src={account} alt="account" className="account_image" />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
