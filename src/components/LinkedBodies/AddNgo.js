import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddNgo = (props) => {
    const[ngo,setNgo] = useState({});

    const saveNgo = () =>{
        axios.post(`http://localhost:8888/api/ngo`,ngo).then(
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
                <Label for="exampleRoom">Ngo name</Label>
                <Input type="text" name="hospital" id="exampleRoom" onChange={(e) => {
                    setNgo({...ngo, name : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleRoom">Raised Funds</Label>
                <Input type="number" name="room" id="exampleRoom" onChange={(e) => {
                    setNgo({...ngo, raisedFunds : e.target.value})
                }}/>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(ngo);
                saveNgo();
            }}>Submit</Button>
        </Form>
    );
}

export default AddNgo;
