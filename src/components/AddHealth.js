import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import MultiSelect from "react-multi-select-component";

const AddHealth = (props) => {
    const problems = [{value:1,label:"Have Hearing Problem"},{value:2,label:"Have Heart Problem"},{value:3,label:"Have Leg Problem"},{value:4,label:"Have Vision Problem"},{value:5,label:"Claustrophobic"}];
    const[health,setHealth] = useState({});
    const[patients,setPatients] = useState([]);
    const[patient,setPatient] = useState({});
    const [selected, setSelected] = useState([]);
    const [result,setResult] = useState({});

    const saveHealth = () =>{
        console.log(JSON.stringify(result))
        axios.post(`http://localhost:8888/api/addHealth`,result).then(
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

    const getAllPatient=()=>{
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

    useEffect(()=>{
        getAllPatient();
    },[]);

    return (
        <Form>
            <FormGroup>
                <Label for="examplePatients">Select Patient</Label>
                <Input type="select" name="select" id="patientSelect" onChange={(e) => {
                    const patientName = e.target.value;
                    for(var i=0;i<patients.length;i++){
                        var obj = patients[i];
                        if(obj.name == patientName){
                            setPatient(obj)
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

            <Button  onClick={()=>{
                setResult({...result,patient:patient})
                toast("Patient added")
            }}>Add Patient</Button>

            <FormGroup>
            <Label for="exampleAttendent">Select Problems:</Label>
            <MultiSelect
                options={problems}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
            />
            </FormGroup>
            <FormGroup>
            <Button  onClick={()=>{
                setResult({...result,problems:selected})
                toast("Problems added")
            }}>Add Problems</Button>
            </FormGroup>
            <FormGroup>
                <Label for="exampleHem">Hemoglobin</Label>
                <Input type="Hem" name="Hemoglobin" id="exampleHem"
                       onChange={(e) => {
                           setHealth({...health, Hemoglobin: e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleBP">Blood Pressure</Label>
                <Input type="BP" name="Blood Pressure" id="exampleBP"
                       onChange={(e) => {
                           setHealth({...health, Bloodpressure: e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSugar">Sugar</Label>
                <Input type="Sugar" name="Sugar" id="exampleSugar"
                       onChange={(e) => {
                           setHealth({...health, Sugar: e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleChol">Cholestrol</Label>
                <Input type="Chol" name="Cholestrol" id="exampleChol"
                       onChange={(e) => {
                           setHealth({...health, Cholestrol: e.target.value})
                       }}/>
            </FormGroup>

            <FormGroup>
                <Label for="exampleUA">Uric Acid</Label>
                <Input type="UA" name="Uric Acid" id="exampleUA"
                       onChange={(e) => {
                           setHealth({...health, Uricacid: e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Button onClick={()=>{
                    setResult({...result,health:health})
                    toast("Health added")
                }}>Add Health</Button>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(selected);
                console.log(health);
                console.log(patient);
                console.log(result);
                saveHealth()
            }}>Submit</Button>
        </Form>
    );
}

export default AddHealth;




