import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import axios from "axios";

const ShowCabServices = (props) => {

    const [services,setServices]=useState([]);
    const [service,setService]=useState({});
    const [dates,setDates]=useState([]);

    const getAllServicesFromServer=()=>{
        axios.get(`http://localhost:8888/api/cabService`).then(
            (response)=>{
                console.log(response.data);
                setServices(response.data);
                console.log(services)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllServicesFromServer();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleChe">Select Cab Services</Label>
                <Input type="select" name="select" id="hospitalSelect" onChange={(e) => {
                    const serviceName = e.target.value;
                    for(var i=0;i<services.length;i++){
                        var obj = services[i];
                        if(obj.name == serviceName){
                            setService(obj)
                            setDates(obj.dates)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        services.length > 0 ? services.map((item) => <option>{item.name}</option>) : "No Cab Services"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Cab Service Details :</ModalHeader>
                <ModalBody>
                    Name : {service.name}<br/>
                    Number of cabs : {service.noOfCabs}<br/>
                    Services taken on : {dates.length > 0 ? dates.map((item)=> item.day+"/"+item.month+"/"+item.year+" , "): "No travel happened"}<br/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
        </Form>

    );
}

export default ShowCabServices;
