import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import axios from "axios";

const ShowAttendent = (props) => {

    const [attendents,setAttendents]=useState([]);
    const [attendent,setAttendent]=useState([]);
    const [patients,setPatients]=useState([]);



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

    const getPatients=(id)=>{
        axios.get(`http://localhost:8888/api/patientByAttendentId/${id}`).then(
            (response)=>{
                console.log(response.data);
                setPatients(response.data);
                console.log(patients)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllAttendent();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleAttendent">Select Attendent</Label>
                <Input type="select" name="select" id="attendentSelect" onChange={(e) => {
                    const attendentName = e.target.value;
                    for(var i=0;i<attendents.length;i++){
                        var obj = attendents[i];
                        if(obj.name == attendentName){
                            setAttendent(obj)
                            getPatients(obj.id)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        attendents.length > 0 ? attendents.map((item) => <option>{item.name}</option>) : "No Attendent"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Attendent Details :</ModalHeader>
                <ModalBody>
                    Attendent Name : {attendent.name}<br/>
                    Attendent Age : {attendent.age}<br/>
                    Attendent Gender : {attendent.gender}<br/>
                    Taking Care of : {patients.length > 0 ? patients.map((item)=> item.name+" "): "No Body"}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
        </Form>

    );
}

export default ShowAttendent;
