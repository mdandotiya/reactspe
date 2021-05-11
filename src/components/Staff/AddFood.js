import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddFood = (props) => {
    const[food,setFood] = useState({});

    const saveFood = () =>{
        axios.post(`http://localhost:8888/api/food`,food).then(
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
                <Label for="exampleCleaner">Food Type</Label>
                <Input type="text" name="cleaner" id="examplCleaner" onChange={(e) => {
                    setFood({...food, type : e.target.value})
                }}/>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(food);
                saveFood();
            }}>Submit</Button>
        </Form>
    );
}

export default AddFood;
