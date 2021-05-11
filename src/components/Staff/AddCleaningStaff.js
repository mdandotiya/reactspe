import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddCleaningStaff = (props) => {
    const[cleaner,setCleaner] = useState({});

    const saveCleaner = () =>{
        axios.post(`http://localhost:8888/api/cleaner`,cleaner).then(
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
                <Label for="exampleCleaner">Cleaner Name</Label>
                <Input type="text" name="cleaner" id="examplCleaner" onChange={(e) => {
                    setCleaner({...cleaner, name : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Floor Number</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={(e) => {
                    setCleaner({...cleaner, floorNo : e.target.value})
                }}>
                    <option>[Select One]</option>
                    <option>1st</option>
                    <option>2nd</option>
                    <option>3rd</option>
                    <option>4th</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Schedule</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={(e) => {
                    setCleaner({...cleaner, weekday : e.target.value})
                }}>
                    <option>[Select One]</option>
                    <option>MWF</option>
                    <option>TTS</option>
                </Input>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(cleaner);
                saveCleaner();
            }}>Submit</Button>
        </Form>
    );
}

export default AddCleaningStaff;
