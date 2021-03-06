import React, {useEffect, useState} from 'react';
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
import axios from "axios";
import {toast} from "react-toastify";


const Patient = ({patient,update},props) => {

    const [health,setHealth] = useState({});
    const suggestion = [];
    const getSuggestions=()=>{
        setHealth(patient.healthcare)
        console.log(health)
        if(health.hasHearingProblem == 1){
            suggestion.push("Hearing Machine Recommended")
        }
        if(health.hasVisionProblem == 1){
            suggestion.push("Glasses Recommended")
        }
        if(health.isClaustrophobic == 1){
            suggestion.push("Non AC room Recommended")
        }
        if(health.Cholestrol > 240){
            suggestion.push("Diet Food Recommended")
        }
        if(health.hasLegProblem == 1){
            suggestion.push("Wheel Chair Recommended")
        }
        console.log(suggestion)
    }

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

    useEffect(()=>{
        getSuggestions();
    },[]);

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
                <CardText>Room No: {patient.room.roomid}</CardText>
                <CardText>Attendent Name : {patient.attendent.name}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deletePatient(patient.id);
                    }}>Delete</Button>
                    <Button color="primary" onClick={toggle}>Health Condition</Button>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>{patient.name}'s Health Condition :</ModalHeader>
                            <ModalBody>
                                 Blood Pressure : {patient.healthcare.bloodpressure}<br/>
                                 Hemoglobin : {patient.healthcare.hemoglobin}<br/>
                                 Sugar Level : {patient.healthcare.sugar}<br/>
                                 Uric Acid Level : {patient.healthcare.uricacid}<br/>
                                 Cholestrol Level : {patient.healthcare.cholestrol}<br/>
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