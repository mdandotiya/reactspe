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

const ShowHospitals = (props) => {

    const [hospitals,setHospitals]=useState([]);
    const [hospital,setHospital]=useState({});
    const [food,setFood]=useState({});

    const getAllHospitalsFromServer=()=>{
        axios.get(`http://localhost:8888/api/hospitals`).then(
            (response)=>{
                console.log(response.data);
                setHospitals(response.data);
                console.log(hospitals)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllHospitalsFromServer();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleChe">Select Hospital</Label>
                <Input type="select" name="select" id="hospitalSelect" onChange={(e) => {
                    const hospitalName = e.target.value;
                    for(var i=0;i<hospitals.length;i++){
                        var obj = hospitals[i];
                        if(obj.name == hospitalName){
                            setHospital(obj)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        hospitals.length > 0 ? hospitals.map((item) => <option>{item.name}</option>) : "No Hospitals"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Hospital Details :</ModalHeader>
                <ModalBody>
                    Hospital Name : {hospital.name}<br/>
                    Doctor's Fee Per Visit : {hospital.feePerVisit}<br/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
        </Form>

    );
}

export default ShowHospitals;
