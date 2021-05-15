import React from 'react';
import { useState,useEffect } from "react";
import axios from "axios";
import Patient from "./Patient";
import {Button, Form, FormGroup, Input, Label, Collapse, CardBody, Card, ModalBody} from "reactstrap";

const ViewFastingSchedule=(props)=>{

    const getAllPatientsFromServer=()=>{
        axios.get(`http://localhost:8888/api/patient`).then(
            (response)=>{
                console.log(response.data);
                var temp = response.data.__proto__;
                console.log(temp);
                setPatients(response.data);
            },
            (error)=>{
                console.log(error);
            }
        );
    };

    useEffect(()=>{
        getAllPatientsFromServer();
    },[]);

    const [patients,setPatients]=useState([

    ]);
    const [patient,setPatient]=useState({});
    const [dates,setDates]=useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleCS">Select Patient</Label>
                <Input type="select" name="select" id="CSSelect" onChange={(e) => {
                    const patientName = e.target.value;
                    for(var i=0;i<patients.length;i++){
                        var obj = patients[i];
                        if(obj.name == patientName){
                            setPatient(obj)
                            setDates(patient.dates)
                        }
                    }

                }}>
                    <option>[Select one]</option>
                    {
                        patients.length > 0 ? patients.map((item) => <option>{item.name}</option>) : "No Patients"
                    }
                </Input>
                <br/>
                <Button color="warning" onClick={()=>{
                    console.log(patient.healthcare)
                }}>Add Patient</Button>
            </FormGroup>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        Fasting Dates : {dates.length > 0 ? dates.map((item)=> item.day+"/"+item.month+"/"+item.year+" , "): "No travel happened"}<br/>
                    </CardBody>
                </Card>
            </Collapse>
            <hr/>
        </Form>

    );
}

export default ViewFastingSchedule;