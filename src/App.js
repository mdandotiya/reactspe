import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Login from "./components/Login";
import React from "react";
import Options from "./components/Options";
import Header from "./components/Header"
import PatientPage from "./components/PatientPage";
import ShowPatient from "./components/Patient"
import AllPatients from "./components/AllPatients";
import AddPatients from "./components/AddPatients";
import FastingDay from "./components/FastingDay";
import Patientmenu from "./components/Patientmenu";
import ResourcePage from "./components/Resources/ResourcePage";
import StaffPage from "./components/Staff/StaffPage";

function App() {
    //const btnHandle = () => toast("Wow so easy!");
  return (
      <div>
          <ToastContainer/>
                <Options/>
      </div>
  );
}
export default App;
