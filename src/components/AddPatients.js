import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useState,useEffect} from "react";
import DayPicker, {DateUtils} from "react-day-picker";
import axios from "axios";

const AddPatients = (props) => {

    const [patient, setpatient] = useState({});
    const [fastingDates, setDate] = useState([]);
    const [attendent,setattendent] = useState([]);
    // form handler function

    const handleform = (e) => {
        console.log(patient);
        e.preventDefault();
    }

    useEffect(()=>{
        axios.get(`http://localhost:8888/api/attendent`).then(res => {
            const persons = res.data;
            console.log(persons);
            setattendent(persons);
            console.log(attendent);
        });
    },[]);

    const handleDayClick = (day, {selected}) => {
        const selectedDays = fastingDates.concat();
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }
        setDate([selectedDays]);
        setpatient({...patient,fasting:selectedDays});
    }

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
                <Label for="exampleAge">Age</Label>
                <Input type="age" name="age" id="exampleAge"
                       onChange={(e) => {
                           setpatient({...patient, age: e.target.value})
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
                <Label for="exampleContact">Contact number</Label>
                <Input type="contact" name="contact" id="exampleContact"
                       onChange={(e) => {
                           setpatient({...patient, contact: e.target.value})
                       }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleAttendent">Attendent</Label>
                <Input type="select" name="select" id="attendentSelect" onChange={(e) => {
                    const attendentname = e.target.value;
                    for(var i=0;i<attendent.length;i++){
                        var obj = attendent[i];
                        if(obj.name === attendentname){
                            setpatient({...patient, attendent: obj.id})
                        }
                    }
                }}>
                    <option>[Select one]</option>
                    {attendent.map(person => <option>{person.name}</option>)}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleFasting">Fasting Days</Label>
                <div>
                    <DayPicker
                        selectedDays={fastingDates}
                        onDayClick={handleDayClick}
                        onChange={(e)=>{
                            setpatient({...patient,fastingdates: e.target.value})
                        }}
                    />
                </div>
            </FormGroup>
            <Button type="submit" onClick={()=>{
                console.log(fastingDates);
            }}>Submit</Button>
        </Form>
    );
}

export default AddPatients;
