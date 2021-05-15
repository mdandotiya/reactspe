import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import MultipleDatePicker from "react-multiple-datepicker";


const AddDate = (props) => {
    const[patients,setPatients] = useState([]);
    const[patient,setPatient] = useState({});
    const [selected, setSelected] = useState([]);
    const [result,setResult] = useState({});

    const saveDate = () =>{
        axios.post(`http://localhost:8888/api/date`,patient).then(
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
            <Button color="warning" onClick={()=>{
                setResult({...result,patient:patient})
                toast("Patient added")
            }}>Add Patient</Button>

            <FormGroup>
                <Label for="exampleDate">Date</Label>
                <MultipleDatePicker
                    onSubmit={dates => setPatient({...patient,dates:dates})}
                />
            </FormGroup>

            <Button type="reset" onClick={()=>{
                console.log(patient);
                saveDate()
            }}>Submit</Button>
        </Form>
    );
}

export default AddDate;




