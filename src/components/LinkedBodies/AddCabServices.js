import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import MultipleDatePicker from "react-multiple-datepicker";

const AddCabServices = (props) => {
    const[service,setService] = useState({totalAmount : 0});

    const saveService = () =>{
        axios.post(`http://localhost:8888/api/cabService`,service).then(
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
                <Label for="exampleRoom">Service name</Label>
                <Input type="text" name="hospital" id="exampleRoom" onChange={(e) => {
                    setService({...service, name : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleRoom">Number of cabs</Label>
                <Input type="number" name="room" id="exampleRoom" onChange={(e) => {
                    setService({...service, noOfCabs : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">Date</Label>
                <MultipleDatePicker
                    onSubmit={dates => setService({...service,dates:dates})}
                />
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(service);
                saveService();
            }}>Submit</Button>
        </Form>
    );
}

export default AddCabServices;
