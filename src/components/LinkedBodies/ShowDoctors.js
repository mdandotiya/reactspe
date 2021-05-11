import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import axios from "axios";
import { ListGroup, ListGroupItem } from 'reactstrap';

const ShowDoctors = (props) => {

    const [doctors,setDoctors]=useState([]);
    const [doctor,setDoctor]=useState({});
    const [hospital,setHospital] = useState({});
    const [dates,setDates] = useState([]);

    const getAllDoctorsFromServer=()=>{
        axios.get(`http://localhost:8888/api/doctor`).then(
            (response)=>{
                console.log(response.data);
                setDoctors(response.data);
                console.log(doctors)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllDoctorsFromServer();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleCS">Select Doctors</Label>
                <Input type="select" name="select" id="CSSelect" onChange={(e) => {
                    const doctorName = e.target.value;
                    for(var i=0;i<doctors.length;i++){
                        var obj = doctors[i];
                        if(obj.name == doctorName){
                            setDoctor(obj)
                            setHospital(obj.hospitals)
                            setDates(obj.dates)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        doctors.length > 0 ? doctors.map((item) => <option>{item.name}</option>) : "No Doctors"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Doctor Details :</ModalHeader>
                <ModalBody>
                    Name : {doctor.name}<br/>
                    Specialization : {doctor.specialization}<br/>
                    Previous Visits : {dates.length > 0 ? dates.map((item)=> item.day+"/"+item.month+"/"+item.year+" , "): "No Visits"}<br/>
                    Belongs To : {hospital.name}<br/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
        </Form>

    );
}

export default ShowDoctors;
