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

const ShowHealthEquipments = (props) => {

    const [equipments,setEquipments]=useState([]);
    const [equipment,setEquipment]=useState({});
    const [availableEquipment,setAvailableEquipment]=useState([]);
    const [attendent,setAttendent]=useState([]);

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
        getAllEquipmentsFromServer();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleEquipment">Select Equipment</Label>
                <Input type="select" name="select" id="equipmentSelect" onChange={(e) => {
                    const equipmentName = e.target.value;
                    for(var i=0;i<equipments.length;i++){
                        var obj = equipments[i];
                        if(obj.name == equipmentName){
                            setEquipment(obj)
                            setAttendent(obj.attendents)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        equipments.length > 0 ? equipments.map((item) => <option>{item.name}</option>) : "No Equipments"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Equipment Details :</ModalHeader>
                <ModalBody>
                    Equipment Name : {equipment.name}<br/>
                    Availability : {equipment.availability}<br/>
                    Assigned to : {attendent.length > 0 ? attendent.map((item)=> item.name+" "): "No Body"}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
            <Label for="exampleEquipment">Available Equipments</Label>
            <ListGroup>
                {
                    availableEquipment.length > 0 ? availableEquipment.map((item) => <ListGroupItem>{item.name} ,  Availablity : {item.availability}</ListGroupItem>) : "No Equipments"
                }
            </ListGroup>
        </Form>

    );
}

export default ShowHealthEquipments;
