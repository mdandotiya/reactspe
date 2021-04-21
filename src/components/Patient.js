import React, { useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import {Link} from "react-router-dom";
import Home from "./Home";
import { BrowserRouter as Route} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";


const Patient = ({patient,update},props) => {

    const deletePatient=(id)=>{
        axios.delete(`http://localhost:8888/api/patientdel/${id}`).then(
            (response)=>{
                toast.success("patient deleted");
                update(id);
            },
            (error)=>{
                toast.error("Can't delete patient , server problem");
            }
        )
    }

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className = "font-weight-bold">{patient.name}</CardSubtitle>
                <CardText>Age: {patient.age}</CardText>
                <CardText>Contact No: {patient.contactno}</CardText>
                <CardText>Gender: {patient.gender}</CardText>
                <CardText>Id: {patient.id}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deletePatient(patient.id);
                    }}>Delete</Button>
                    <Button color="warning m1-3">Update</Button>
                    <Button color="primary" onClick={toggle}>Health Condition</Button>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>{patient.name}'s Health Condition :</ModalHeader>
                            <ModalBody>
                                 Blood Pressure : {patient.bloodpressure}<br/>
                                 Hemoglobin : {patient.hemoglobin}<br/>
                                 Sugar Level : {patient.sugar}<br/>
                                 Uric Acid Level : {patient.uricacid}<br/>
                                 Cholestrol Level : {patient.cholestrol}<br/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                </Container>
            </CardBody>
        </Card>
    );
}


export default Patient;