import React from "react";
import Dashboard from "./storage/dashboard";
import Login from "./authentification/login";
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./authentification/privateRoute";
import ForgetPassword from "./authentification/forgetpassword";
import { AuthProvider } from "../context/AuthContext";
import Profile from "./authentification/Profile";
import Signup from "./authentification/Signup";
import UpdateProfile from "./authentification/UpdateProfile";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    > 
    <div className="w-100" style={{ maxWidth: "400px" }}>
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />

          {/* Profile */}
          <PrivateRoute path="/Profile" component={Profile} />
          <PrivateRoute path="/UpdateProfile" component={UpdateProfile} />

          {/* Auth */}
          <Route path="/Signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/ForgetPassword" component={ForgetPassword} />
        </Switch>
      </AuthProvider>
    </Router>
    </div>
    </Container>
  );
}

export default App;