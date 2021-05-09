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

const ShowFoodStaff = (props) => {

    const [chefs,setChefs]=useState([]);
    const [chef,setChef]=useState({});
    const [availableEquipment,setAvailableEquipment]=useState([]);

    const getAllChefsFromServer=()=>{
        axios.get(`http://localhost:8888/api/chef`).then(
            (response)=>{
                console.log(response.data);
                setChefs(response.data);
                console.log(chefs)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllChefsFromServer();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleChe">Select Chef</Label>
                <Input type="select" name="select" id="chefSelect" onChange={(e) => {
                    const chefName = e.target.value;
                    for(var i=0;i<chefs.length;i++){
                        var obj = chefs[i];
                        if(obj.name == chefName){
                            setChef(obj)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        chefs.length > 0 ? chefs.map((item) => <option>{item.name}</option>) : "No Chefs"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Chef Details :</ModalHeader>
                <ModalBody>
                    Chef Name : {chef.name}<br/>
                    Speciality : {chef.food.type}<br/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
        </Form>

    );
}

export default ShowFoodStaff;
