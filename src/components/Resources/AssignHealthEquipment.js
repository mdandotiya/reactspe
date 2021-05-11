import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState,useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AssignHE = (props) => {

    const [attendents,setAttendents]=useState([]);
    const [equipments,setEquipments]=useState([]);
    const [equipattendent,setrelation]=useState([]);
    const [equipment,setEquipment]=useState({});
    const [temp,setTemp] = useState([]);
    const [availableEquipment,setAvailableEquipment]=useState([]);


    const saveRelation = () => {
        axios.post(`http://localhost:8888/api/equipmentassign`,equipment).then(
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

    const getAllAttendent=()=>{
        axios.get(`http://localhost:8888/api/attendent`).then(
            (response)=>{
                console.log(response.data);
                setAttendents(response.data);
                console.log(attendents)
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    const getAllEquipmentsFromServer=()=>{
        axios.get(`http://localhost:8888/api/healthEquipment`).then(
            (response)=>{
                console.log(response.data);
                setEquipments(response.data);
                setAvailableEquipment(response.data.filter((p)=>p.availability != 0))
                console.log(equipments)
            },
            (error)=>{
                console.log(error);
            }
        );
    }



    useEffect(()=>{
        getAllAttendent();
        getAllEquipmentsFromServer();
    },[]);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleAttendent">Select Attendent</Label>
                <Input type="select" name="select" id="attendentSelect" onChange={(e) => {
                    const attendentName = e.target.value;
                    for(var i=0;i<attendents.length;i++){
                        var obj = attendents[i];
                        if(obj.name == attendentName){
                            setEquipment({...equipment,attendent:obj})
                            console.log(obj)

                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        attendents.length > 0 ? attendents.map((item) => <option>{item.name}</option>) : "No Attendent"
                    }
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEquipment">Select Equipment</Label>
                <Input type="select" name="select" id="equipmentSelect" onChange={(e) => {
                    const equipmentName = e.target.value;
                    for(var i=0;i<equipments.length;i++){
                        var obj = equipments[i];
                        if(obj.name == equipmentName){
                            setEquipment({...equipment,healthEquipment:obj})

                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        availableEquipment.length > 0 ? availableEquipment.map((item) => <option>{item.name}</option>) : "No Equipments"
                    }
                </Input>
            </FormGroup>
            <Button type="reset" onClick={()=>{
                console.log(equipment);
                saveRelation();
            }}>Submit</Button>
        </Form>
    );
}

export default AssignHE;
