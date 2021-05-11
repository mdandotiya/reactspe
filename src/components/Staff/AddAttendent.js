import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddAttendent = (props) => {
    const[attendent,setAttendent] = useState({occupied:"No"});

    const saveAttendent = () =>{
        axios.post(`http://localhost:8888/api/attendent`,attendent).then(
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
                <Label for="exampleAttendent">Attendent Name</Label>
                <Input type="text" name="attendent" id="examplAttendent" onChange={(e) => {
                    setAttendent({...attendent, name : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleAge">Age</Label>
                <Input type="age" name="age" id="exampleAge" onChange={(e) => {
                    setAttendent({...attendent, age : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Gender</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={(e) => {
                    setAttendent({...attendent, gender : e.target.value})
                }}>
                    <option>[Select One]</option>
                    <option>Male</option>
                    <option>Female</option>
                </Input>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(attendent);
                saveAttendent();
            }}>Submit</Button>
        </Form>
    );
}

export default AddAttendent;
