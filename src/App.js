import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/landing-page/LandingPage";
import LogInForm from "./pages/logIn-page/LogInForm";
import RegisterForm from "./pages/register-page/RegisterForm";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/LogIn" component={LogInForm} />
          <Route path="/Register" component={RegisterForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
