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
import { BrowserRouter as Route} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";


const Room = ({room,update},props) => {

    const deleteRoom=(id)=>{
        axios.delete(`http://localhost:8888/api/roomdel/${id}`).then(
            (response)=>{
                toast.success("room deleted");
                update(id);
            },
            (error)=>{
                toast.error("Can't delete room , server problem");
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
                <CardSubtitle className = "font-weight-bold">Room Number : {room.number}</CardSubtitle>
                <CardText>Alloted to Patient: {room.patient}</CardText>
                <CardText>Type: {room.type}</CardText>
                <CardText>Availability: {room.occupied}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteRoom(room.id);
                    }}>Delete</Button>
                    <Button color="warning m1-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}


export default Room;