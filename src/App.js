import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/Home";
import Login from "./components/Login";
import React from "react";
import Options from "./components/Options";
import Header from "./components/Header"
import PatientPage from "./components/PatientPage";
import ShowPatient from "./components/Patient"
import AllPatients from "./components/AllPatients";
import AddPatients from "./components/AddPatients";
import FastingDay from "./components/FastingDay";

function App() {
    //const btnHandle = () => toast("Wow so easy!");
  return (
      <div>
          <ToastContainer/>
                <PatientPage/>
      </div>
  );
}
export default App;
