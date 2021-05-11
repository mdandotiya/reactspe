import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import MultiSelect from "react-multi-select-component";

const AddComplaintStaff = (props) => {

    const[staff,setStaff] = useState({});
    const[complaints,setComplaints] = useState([]);
    const[complaint,setComplaint] = useState([]);
    const[result,setResult] = useState({});


    const [selected, setSelected] = useState([]);

    const saveStaff = () =>{
        axios.post(`http://localhost:8888/api/staff`,staff).then(
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

    useEffect(()=>{
        axios.get(`http://localhost:8888/api/complaint`).then(res => {
            const persons = res.data;
            console.log(persons);
            setComplaints(persons);
        });
    },[]);



    return (

        <Form>
            <Label for="exampleAttendent">Select Complaints:</Label>
            <MultiSelect
                options={complaints}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
            />
            <Button  onClick={()=>{
                setStaff({...staff,complaintJsonList:selected})
                toast("Complaints Added")
            }}>Submit</Button>
            <FormGroup>
                <Label for="exampleAttendent">Staff Name</Label>
                <Input type="text" name="attendent" id="examplAttendent" onChange={(e) => {
                    setStaff({...staff,name:e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleAttendent">Open Complaints</Label>
                <Input type="number" name="attendent" id="examplAttendent" onChange={(e) => {
                    setStaff({...staff,openComplaints:e.target.value})
                }}/>
            </FormGroup>

            <Button type="reset" onClick={()=>{
                console.log(staff)
                saveStaff();
            }}>Submit</Button>
        </Form>
    );
}

export default AddComplaintStaff;
