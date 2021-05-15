import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import React from "react";
import Options from "./components/Options";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/Login";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import PatientPage from "./components/PatientPage";
import ResourcePage from "./components/Resources/ResourcePage";
import StaffPage from "./components/Staff/StaffPage";
import Page from "./components/LinkedBodies/Page";



function App() {
    //const btnHandle = () => toast("Wow so easy!");
  return (
      <div>
          <Router>
              <Route path={'/options'} component={Options} exact/>
              <Route exact path="/" component={Login} exact/>
              <Route path={'/patient-page'} component={PatientPage} exact/>
              <Route path={'/resource-page'} component={ResourcePage} exact/>
              <Route path={'/staff-page'} component={StaffPage} exact/>
              <Route path={'/LB-page'} component={Page} exact/>
              <Route path={'/logout'} component={Login} exact/>
          </Router>
      </div>
  );
}
export default App;
