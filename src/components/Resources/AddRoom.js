import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddRoom = (props) => {
    const[rooms,setRoom] = useState({occupied:"No"});

    const saveRoom = () =>{
        axios.post(`http://localhost:8888/api/room`,rooms).then(
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
                <Label for="exampleRoom">Room Number</Label>
                <Input type="text" name="room" id="exampleRoom" onChange={(e) => {
                    setRoom({...rooms, roomid : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Type</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={(e) => {
                    setRoom({...rooms, type : e.target.value})
                }}>
                    <option>[Select One]</option>
                    <option>AC</option>
                    <option>NON AC</option>
                </Input>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(rooms);
                saveRoom();
            }}>Submit</Button>
        </Form>
    );
}

export default AddRoom;
