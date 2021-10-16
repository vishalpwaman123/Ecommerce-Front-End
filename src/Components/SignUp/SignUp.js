import React, { Component } from "react";
import Authentication from "./../../Services/Authentication.js";
import {
  Checkbox,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

import account from "./../../Asserts/account.svg";
import "./SignUp.scss";

const authentication = new Authentication();

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      Role: "User",
      UserName: null,
      MobileNumber: null,
      Email: null,
      Password: null,
      Confirm: null,
      ShowPassword: false,

      ErrorFlag: {
        UserName: false,
        MobileNumber: false,
        Email: false,
        Password: false,
        Confirm: false,
        ShowPassword: false,
      },
    };
  }

  handleRolesChange = (value) => {
    console.log("Value : ", value);
    this.setState({ Role: value });
  };

  HandleChanges = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log("Name : ", name, "Value : ", value);
    this.setState({ [name]: value }, () => console.log("State :", this.state));
  };

  HandleValidation = () => {
    var Status = this.state;
    var ErrorFlags = this.state.ErrorFlag;
    var Flag = 0;
    if (Status.UserName === null) {
      ErrorFlags.UserName = false;
      Flag = 1;
    } else if (Status.MobileNumber === null) {
      ErrorFlags.MobileNumber = false;
      Flag = 1;
    } else if (Status.Email === null) {
      ErrorFlags.Email = false;
      Flag = 1;
    } else if (Status.Password === null) {
      ErrorFlags.Password = false;
      Flag = 1;
    } else if (Status.Confirm === null) {
      ErrorFlags.Confirm = false;
      Flag = 1;
    }
    this.setState({ ErrorFlags });
    if (Flag === 1) {
      return false;
    }
    return true;
  };

  HandleSubmit = (event) => {
    // event.preventDefault();
    if (this.HandleValidation()) {
      const data = {
        userName: this.state.UserName,
        emailID: this.state.Email,
        mobileNumber: this.state.MobileNumber,
        password: this.state.Password,
        confirmPassword: this.state.Confirm,
      };

      if (this.state.Role.toLowerCase() === "admin") {
        authentication
          .AdminSignUp(data)
          .then((data) => {
            console.log("Admin Sign Up Result : ", data);
          })
          .catch((error) => {
            console.log("Admin Sign Up Error : ", error);
          });
      } else {
        console.log("This User Registration Area.");
      }
    } else {
      console.log("Some Field Is Blank or Null => ", this.state);
    }
  };

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
                    name="UserName"
                    value={this.state.UserName}
                    onChange={this.HandleChanges}
                  />
                </div>
                <div className="MobileNumber">
                  <TextField
                    type="Number"
                    label="Mobile Number"
                    variant="outlined"
                    size="small"
                    name="MobileNumber"
                    value={this.state.MobileNumber}
                    onChange={this.HandleChanges}
                  />
                </div>
              </div>
              <div className="EmailID">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  name="Email"
                  value={this.state.Email}
                  onChange={this.HandleChanges}
                  fullWidth
                />
              </div>
              <div className="EmailHelperText">
                You can use letters, numbers & periods
              </div>
              <div className="Input2">
                <div className="Password">
                  <TextField
                    type={this.state.ShowPassword ? "text" : "Password"}
                    label="Password"
                    variant="outlined"
                    size="small"
                    name="Password"
                    value={this.state.Password}
                    onChange={this.HandleChanges}
                  />
                </div>
                <div className="ConfirmPasword">
                  <TextField
                    type={this.state.ShowPassword ? "text" : "Password"}
                    label="Confirm"
                    variant="outlined"
                    size="small"
                    name="Confirm"
                    value={this.state.Confirm}
                    onChange={this.HandleChanges}
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
                  onChange={(e) => {
                    this.setState(
                      { ShowPassword: !this.state.ShowPassword },
                      () => console.log(this.state)
                    );
                  }}
                />
                <div className="ShowPasswordText">Show Password</div>
              </div>
              <div className="Roles">
                <div className="Text">Roles :</div>
                <RadioGroup
                  aria-label="Role"
                  name="gender1"
                  className="RolesRadioGroup"
                  value={this.state.Role}
                  onChange={(e) => {
                    this.handleRolesChange(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="Admin"
                    control={<Radio />}
                    label="Admin"
                    className="UserRole"
                  />
                  <FormControlLabel
                    value="User"
                    control={<Radio />}
                    label="User"
                    className="UserRole"
                  />
                </RadioGroup>
              </div>
              <div className="Action_Button">
                <Button color="primary" className="SignInButton">
                  Sign in Instead
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="SignUpButton"
                  onClick={() => {
                    this.HandleSubmit();
                  }}
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
