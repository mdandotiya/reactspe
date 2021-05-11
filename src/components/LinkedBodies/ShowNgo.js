import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import axios from "axios";

const ShowNgo = (props) => {

    const [ngos,setNgos]=useState([]);
    const [ngo,setNgo]=useState({});
    const [fundData,setFund] = useState([]);

    const getAllNgosFromServer=()=>{
        axios.get(`http://localhost:8888/api/ngo`).then(
            (response)=>{
                console.log(response.data);
                setNgos(response.data);
                console.log(ngos)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllNgosFromServer();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleCS">Select NGO</Label>
                <Input type="select" name="select" id="CSSelect" onChange={(e) => {
                    const ngoName = e.target.value;
                    for(var i=0;i<ngos.length;i++){
                        var obj = ngos[i];
                        if(obj.name == ngoName){
                            setNgo(obj)
                            setFund(obj.fundData)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        ngos.length > 0 ? ngos.map((item) => <option>{item.name}</option>) : "No NGOs"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>NGO Details :</ModalHeader>
                <ModalBody>
                    Name : {ngo.name}<br/>
                    Raised Fund : {ngo.raisedFunds}<br/>
                    Fund Details :<br/>
                    {fundData.length > 0 ? fundData.map((item)=> item.amount+" deposited on "+ item.date.day+"/"+item.date.month+"/"+item.date.year+" \n "): "Nothing Deposited"}<br/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
        </Form>

    );
}

export default ShowNgo;
