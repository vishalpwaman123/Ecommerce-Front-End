import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import "./ResetPassword.scss";

export class ResetPassword extends Component {
  render() {
    return (
      <div className="ResetPassword_Container">
        <div className="Container">
          <div className="Header">Ecommerce</div>
          <div className="SubHeader">Reset Password</div>
          <div className="EmailID"></div>
          <div className="Form">
            <div className="NewPassword">
              <div className="Text">New Password :</div>
              <TextField
                id="outlined-basic"
                //   label="Ex. 123456"
                variant="outlined"
                size="small"
                className="NewPasswords"
              />
            </div>
            <div className="ConfirmNewPassword">
              <div className="Text">Confirm Password :</div>
              <TextField
                id="outlined-basic"
                //   label="Ex. 123456"
                variant="outlined"
                size="small"
                className="ConfirmPassword"
              />
            </div>
            <div className="Button">
              <Button
                color="primary"
                className="BackButton"
                variant="contained"
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="ResetButton"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
