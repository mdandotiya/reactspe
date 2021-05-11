import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AssignLR = (props) => {

    const [patients,setPatients]=useState([]);
    const [resources,setResources]=useState([]);
    const [resource,setResource]=useState({});


    const save = () => {
        axios.post(`http://localhost:8888/api/resourceassign`,resource).then(
            (response)=>{
                console.log(response.data);
                toast("Data Saved Successfully !!");
            },
            (error)=>{
                toast("Data can't be saved !!");
                console.log(error);
            }
        );
    }

    const getAllPatients=()=>{
        axios.get(`http://localhost:8888/api/patient`).then(
            (response)=>{
                console.log(response.data);
                setPatients(response.data);
                console.log(patients)
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    const getAllResourcesFromServer=()=>{
        axios.get(`http://localhost:8888/api/luxuryResources`).then(
            (response)=>{
                console.log(response.data);
                setResources(response.data);
                console.log(resources)
            },
            (error)=>{
                console.log(error);
            }
        );
    }



    useEffect(()=>{
        getAllPatients();
        getAllResourcesFromServer();
    },[]);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleAttendent">Select Patient</Label>
                <Input type="select" name="select" id="attendentSelect" onChange={(e) => {
                    const patientName = e.target.value;
                    for(var i=0;i<patients.length;i++){
                        var obj = patients[i];
                        if(obj.name == patientName){
                            setResource({...resource,patient:obj})
                            console.log(obj)

                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        patients.length > 0 ? patients.map((item) => <option>{item.name}</option>) : "No Patient"
                    }
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEquipment">Select Resource</Label>
                <Input type="select" name="select" id="equipmentSelect" onChange={(e) => {
                    const resourceName = e.target.value;
                    for(var i=0;i<resources.length;i++){
                        var obj = resources[i];
                        if(obj.name == resourceName){
                            setResource({...resource,resource:obj})

                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        resources.length > 0 ? resources.map((item) => <option>{item.name}</option>) : "No Resources"
                    }
                </Input>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(resource);
                save();
            }}>Submit</Button>
        </Form>
    );
}

export default AssignLR;
