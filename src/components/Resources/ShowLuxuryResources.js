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

const ShowLuxuryResources = (props) => {

    const [resources,setResources]=useState([]);
    const [resource,setResource]=useState({});
    const [availableResource,setAvailableResource]=useState([]);
    const [patient,setpatient] = useState([]);

    const getAllResourcesFromServer=()=>{
        axios.get(`http://localhost:8888/api/luxuryResources`).then(
            (response)=>{
                console.log(response.data);
                setResources(response.data);
                setAvailableResource(response.data.filter((p)=>p.availability != 0))
                console.log(resources)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllResourcesFromServer();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleResource">Select Equipment</Label>
                <Input type="select" name="select" id="equipmentResource" onChange={(e) => {
                    const resourceName = e.target.value;
                    for(var i=0;i<resources.length;i++){
                        var obj = resources[i];
                        if(obj.name == resourceName){
                            setResource(obj)
                            setpatient(obj.patients)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        resources.length > 0 ? resources.map((item) => <option>{item.name}</option>) : "No Luxury resources"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Equipment Details :</ModalHeader>
                <ModalBody>
                    Equipment Name : {resource.name}<br/>
                    Availability : {resource.availability}<br/>
                    Assigned To : {patient.length > 0 ? patient.map((item)=> item.name+" "): "No Body"}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
            <Label for="exampleEquipment">Available Luxury Resources</Label>
            <ListGroup>
                {
                    availableResource.length > 0 ? availableResource.map((item) => <ListGroupItem>{item.name} ,  Availablity : {item.availability}</ListGroupItem>) : "No Luxury Resources"
                }
            </ListGroup>
        </Form>

    );
}

export default ShowLuxuryResources;
