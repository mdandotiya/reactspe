import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddHospital = (props) => {
    const[hospital,setHospital] = useState({});

    const saveHospital = () =>{
        axios.post(`http://localhost:8888/api/hospitals`,hospital).then(
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

    return (
        <Form>
            <FormGroup>
                <Label for="exampleRoom">Hospital name</Label>
                <Input type="text" name="hospital" id="exampleRoom" onChange={(e) => {
                    setHospital({...hospital, name : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleRoom">Fee Per Visit</Label>
                <Input type="number" name="room" id="exampleRoom" onChange={(e) => {
                    setHospital({...hospital, feePerVisit : e.target.value})
                }}/>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(hospital);
                saveHospital();
            }}>Submit</Button>
        </Form>
    );
}

export default AddHospital;
