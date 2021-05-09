import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddHealthEquipment = (props) => {
    const[equipment,setEquipment] = useState({});

    const saveEquipments = () =>{
        axios.post(`http://localhost:8888/api/equipment`,equipment).then(
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
                <Label for="exampleName">Equipment Name</Label>
                <Input type="text" name="equipment" id="exampleEquipment" onChange={(e) => {
                    setEquipment({...equipment, name : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleAvail">Availability</Label>
                <Input type="number" name="availability" id="exampleAvail" onChange={(e) => {
                    setEquipment({...equipment, availability : e.target.value})
                }}/>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(equipment);
                saveEquipments();
            }}>Submit</Button>
        </Form>
    );
}

export default AddHealthEquipment;
