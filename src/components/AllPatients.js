import React from 'react';
import { useState,useEffect } from "react";
import axios from "axios";
import Patient from "./Patient";

const AllPatients=()=>{

    useEffect(()=>{
        document.title="All Patients";
    },[]);

    const getAllPatientsFromServer=()=>{
        axios.get(`http://localhost:8888/api/patient`).then(
            (response)=>{
                console.log(response.data);
                var temp = response.data.__proto__;
                console.log(temp);
                setPatient(response.data);
            },
            (error)=>{
                console.log(error);
            }
        );
    };

    useEffect(()=>{
       getAllPatientsFromServer();
    },[]);

    const [patients,setPatient]=useState([

    ]);

    const removePatientById=(id)=>{
        setPatient(patients.filter((p)=>p.id!=id))
    }



    return(
        <div>
            <h1>All Patients</h1>
            <p>List of Patients are as follows:</p>
            {
                patients.length>0 ? patients.map((item)=>
                <Patient key={item.id} patient={item} update={removePatientById}/>): "No Patients"
            }
        </div>
    );
}

export default AllPatients;