import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddLuxuryResource = (props) => {
    const[resource,setResource] = useState({});

    const saveEquipments = () =>{
        axios.post(`http://localhost:8888/api/resource`,resource).then(
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
                <Label for="exampleName">Resource Name</Label>
                <Input type="text" name="equipment" id="exampleEquipment" onChange={(e) => {
                    setResource({...resource, name : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleAvail">Availability</Label>
                <Input type="number" name="availability" id="exampleAvail" onChange={(e) => {
                    setResource({...resource, availability : e.target.value})
                }}/>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(resource);
                saveEquipments();
            }}>Submit</Button>
        </Form>
    );
}

export default AddLuxuryResource;
