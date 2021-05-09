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


const ShowRooms = (props) => {

    const [room,setRoom]=useState({});
    const [acroom,setacroom]=useState([]);
    const [rooms,setRooms]=useState([

    ]);

    const getAllRoomsFromServer=()=>{
         axios.get(`http://localhost:8888/api/room`).then(
            (response)=>{
                console.log(response.data);
                setRooms(response.data);
                setacroom(response.data.filter((p)=>p.type=="AC" && p.occupied=="No"))
                console.log(rooms)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    const [patient,setPatient]=useState('');

    const getPatient=(id)=>{
        axios.get(`http://localhost:8888/api/patientByRoomId/${id}`).then(
            (response)=>{
                console.log(response.data);
                setPatient(response.data);
            },
            (error)=>{
                console.log(error);
            }
        );
    }

    useEffect(()=>{
        getAllRoomsFromServer();
    },[]);


    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="examplRoom">Select Room</Label>
                <Input type="select" name="select" id="roomSelect" onChange={(e) => {
                    const roomno = e.target.value;
                    for(var i=0;i<rooms.length;i++){
                        var obj = rooms[i];
                        if(obj.roomid == roomno){
                            getPatient(obj.id)
                             setRoom(obj)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        rooms.length > 0 ? rooms.map((item) => <option>{item.roomid}</option>) : "No rooms"
                    }
                        </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Room Details :</ModalHeader>
                <ModalBody>
                    Room number : {room.roomid}<br/>
                    Room Type : {room.type}<br/>
                    Room Occupied : {room.occupied}<br/>
                    Allotted to Patient : {patient.name}<br/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
            <Label for="exampleRoom">Available Ac Rooms</Label>
            <ListGroup>
                {
                    acroom.length > 0 ? acroom.map((item) => <ListGroupItem>{item.roomid}</ListGroupItem>) : "No Available rooms"
                }
            </ListGroup>
        </Form>

    );
}

export default ShowRooms;
