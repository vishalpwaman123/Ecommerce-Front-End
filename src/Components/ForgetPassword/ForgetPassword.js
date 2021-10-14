import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";

import "./ForgetPassword.scss";

export class ForgetPassword extends Component {
  render() {
    return (
      <div className="ForgetPassword_Container">
        <div className="Container">
          <div className="Header">Ecommerce</div>
          <div className="SubHeader">Forget Password</div>
          <div className="SubSubHeader">Enter Your Email Address</div>
          <div className="Form">
            <div className="EmailID">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                className="Email_Input"
              />
            </div>
            <div className="Otp">
              <div className="Text">OTP :</div>
              <TextField
                id="outlined-basic"
                label="Ex. 123456"
                variant="outlined"
                size="small"
                className="OTP_Input"
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
                className="NextButton"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgetPassword;
