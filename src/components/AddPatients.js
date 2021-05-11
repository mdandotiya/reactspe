import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import MultipleDatePicker from 'react-multiple-datepicker'
import {toast} from "react-toastify";

const AddPatients = (props) => {

    const [patient, setpatient] = useState({});
    const [fastingDates, setDate] = useState([]);
    const [attendent,setattendent] = useState([]);
    const [room,setroom] = useState([]);
    const [value,setValue]=useState([]);
    const [health,setHealth] = useState({});

    // form handler function

    const handleform = (e) => {
        console.log(patient);
        e.preventDefault();
    }

    const savePatient = () => {
        axios.post(`http://localhost:8888/api/patient`,patient).then(
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
        axios.get(`http://localhost:8888/api/attendent`).then(res => {
            const persons = res.data;
            console.log(persons);
            setattendent(persons);
            console.log(attendent);
        });
    },[]);

    useEffect(()=>{
        axios.get(`http://localhost:8888/api/room`).then(res => {
            const roomlist = res.data;
            console.log(roomlist);
            setroom(roomlist);
            console.log(room);
        });
    },[]);


    return (
        <Form onSubmit={handleform}>
            <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input type="name" name="name" id="exampleName"
                       onChange={(e) => {
                           setpatient({...patient, name: e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Gender</Label>
                <Input type="select" name="select" id="exampleSelect" onChange = {(e)=> {
                    setpatient({...patient, gender :  e.target.value})
                }}>
                    <option>[Select one]</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleAge">Age</Label>
                <Input type="age" name="age" id="exampleAge"
                       onChange={(e) => {
                           setpatient({...patient, age: e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleContact">Contact number</Label>
                <Input type="contact" name="contact" id="exampleContact"
                       onChange={(e) => {
                           setpatient({...patient, contact : e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleAttendent">Attendent</Label>
                <Input type="select" name="select" id="attendentSelect" onChange={(e) => {
                    const attendentname = e.target.value;
                    for(var i=0;i<attendent.length;i++){
                        var obj = attendent[i];
                        if(obj.name === attendentname){
                            setpatient({...patient, attendent: obj})
                        }
                    }
                }}>
                    <option>[Select one]</option>
                    {attendent.map(person => <option>{person.name}</option>)}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleRoom">Room No</Label>
                <Input type="select" name="select" id="roomSelect" onChange={(e) => {
                    const roomno = e.target.value;
                    for(var i=0;i<room.length;i++){
                        var obj = room[i];
                        if(obj.roomid == roomno){
                            setpatient({...patient, room: obj})
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {room.map(rooms => <option>{rooms.roomid}</option>)}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleHem">Hemoglobin</Label>
                <Input type="number" name="Hemoglobin" id="exampleHem"
                       onChange={(e) => {
                           setHealth({...health, Hemoglobin: e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleBP">Blood Pressure</Label>
                <Input type="number" name="Blood Pressure" id="exampleBP"
                       onChange={(e) => {
                           setHealth({...health, Bloodpressure: e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSugar">Sugar</Label>
                <Input type="number" name="Sugar" id="exampleSugar"
                       onChange={(e) => {
                           setHealth({...health, Sugar: e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleChol">Cholestrol</Label>
                <Input type="number" name="Cholestrol" id="exampleChol"
                       onChange={(e) => {
                           setHealth({...health, Cholestrol: e.target.value})
                       }}/>
            </FormGroup>

            <FormGroup>
                <Label for="exampleUA">Uric Acid</Label>
                <Input type="number" name="Uric Acid" id="exampleUA"
                       onChange={(e) => {
                           setHealth({...health, Uricacid: e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">Date</Label>
                <MultipleDatePicker
                    onSubmit={dates => setValue(dates)}
                />
            </FormGroup>

            <Button type="reset" onClick={()=>{
                console.log(health);
                setpatient({...patient,healthcare:health});
                console.log(patient);
                savePatient();
            }}>Submit</Button>
        </Form>
    );
}

export default AddPatients;
