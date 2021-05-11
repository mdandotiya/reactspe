import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddChef = (props) => {
    const[chef,setChef] = useState({});
    const[food,setFood] = useState([]);

    const saveChef = () =>{
        axios.post(`http://localhost:8888/api/chef`,chef).then(
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
        axios.get(`http://localhost:8888/api/food`).then(res => {
            const persons = res.data;
            console.log(persons);
            setFood(persons);
            console.log(food);
        });
    },[]);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleAttendent">Chef Name</Label>
                <Input type="text" name="attendent" id="examplAttendent" onChange={(e) => {
                    setChef({...chef, name : e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Type</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={(e) => {
                    const foodName = e.target.value;
                    for(var i=0;i<food.length;i++){
                        var obj = food[i];
                        if(obj.type === foodName){
                            setChef({...chef, foodid: obj.id})
                        }
                    }
                }}>
                    <option>[Select one]</option>
                    {food.map(item => <option>{item.type}</option>)}
                </Input>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(chef);
                saveChef();
            }}>Submit</Button>
        </Form>
    );
}

export default AddChef;
