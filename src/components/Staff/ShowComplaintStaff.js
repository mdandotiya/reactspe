import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import axios from "axios";

const ShowComplaintStaff = (props) => {

    const [CSs,setCSs]=useState([]);
    const [CS,setCS]=useState({});
    const [complaint,setComplaints] = useState([]);

    const getAllCSsFromServer=()=>{
        axios.get(`http://localhost:8888/api/complaintStaff`).then(
            (response)=>{
                console.log(response.data);
                setCSs(response.data);
                console.log(CSs)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllCSsFromServer();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleCS">Select Complaint Staff</Label>
                <Input type="select" name="select" id="CSSelect" onChange={(e) => {
                    const CSName = e.target.value;
                    for(var i=0;i<CSs.length;i++){
                        var obj = CSs[i];
                        if(obj.name == CSName){
                            setCS(obj)
                            setComplaints(obj.complaints)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        CSs.length > 0 ? CSs.map((item) => <option>{item.name}</option>) : "No Data"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Chef Details :</ModalHeader>
                <ModalBody>
                    Name : {CS.name}<br/>
                    Number of Open Complaints : {CS.openComplaints}<br/>
                    Complaints : {complaint.length > 0 ? complaint.map((item)=> item.detail+" , "): "No Complaints"}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
        </Form>

    );
}

export default ShowComplaintStaff;
