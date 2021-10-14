import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import AdminDashBoard from "./Components/DashBoard/AdminDashBoard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/ForgetPassword" component={ForgetPassword} />
          <Route exact path="/ResetPassword" component={ResetPassword} />
          <Route exact path="/AdminDashBoard" component={AdminDashBoard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
