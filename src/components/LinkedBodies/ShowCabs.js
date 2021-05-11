import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import axios from "axios";

const ShowCabs = (props) => {

    const [cabs,setCabs]=useState([]);
    const [cab,setCab]=useState({});
    const [service,setService] = useState({});

    const getAllCabsFromServer=()=>{
        axios.get(`http://localhost:8888/api/cab`).then(
            (response)=>{
                console.log(response.data);
                setCabs(response.data);
                console.log(cabs)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllCabsFromServer();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleCS">Select Cabs</Label>
                <Input type="select" name="select" id="CSSelect" onChange={(e) => {
                    const cabName = e.target.value;
                    for(var i=0;i<cabs.length;i++){
                        var obj = cabs[i];
                        if(obj.name == cabName){
                            setCab(obj)
                            setService(obj.cabService)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        cabs.length > 0 ? cabs.map((item) => <option>{item.name}</option>) : "No Cabs"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Cab Details :</ModalHeader>
                <ModalBody>
                    Name : {cab.name}<br/>
                    Fare per KM : {cab.farePerKm}<br/>
                    Total Km : {cab.totalKm}<br/>
                    Belongs To : {service.name}<br/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
        </Form>

    );
}

export default ShowCabs;
