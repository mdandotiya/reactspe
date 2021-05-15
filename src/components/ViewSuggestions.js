import React from 'react';
import { useState,useEffect } from "react";
import axios from "axios";
import Patient from "./Patient";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const ViewSuggestions=(props)=>{

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
    const [health,setHealth]=useState({});
    const [result,setResult]=useState([]);
    var suggestion = [];

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
                    suggestion = []
                    console.log(health)
                    if(patient.healthcare.hasHearingProblem == 1){
                        suggestion.push("Hearing Machine Recommended")
                    }
                    if(patient.healthcare.hasVisionProblem == 1){
                        suggestion.push("Glasses Recommended")
                    }
                    if(patient.healthcare.isClaustrophobic == 1){
                        suggestion.push("Non AC room Recommended")
                    }
                    if(patient.healthcare.cholestrol > 240){
                        suggestion.push("Diet Food Recommended")
                    }
                    if(patient.healthcare.hasLegProblem == 1){
                        suggestion.push("Wheel Chair Recommended")
                    }
                    setResult(suggestion);
                    console.log(suggestion)
                    console.log(result)
                }}>Add Patient</Button>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Suggestions</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Suggestions :</ModalHeader>
                <ModalBody>
                    {result.length>0?result.map((item)=> item+" , "): "No Suggestions"}<br/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
        </Form>

    );
}

export default ViewSuggestions;