import React, {useEffect, useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import axios from "axios";

const ShowCleaningStaff = (props) => {

    const [cleaners,setCleaners]=useState([]);
    const [cleaner,setCleaner]=useState({});
    const [weekdays,setWeekdays]=useState([]);
    var week = [];

    const getAllCleanersFromServer=()=>{
        axios.get(`http://localhost:8888/api/cleaningStaff`).then(
            (response)=>{
                console.log(response.data);
                setCleaners(response.data);
                console.log(cleaners)
            },
            (error)=>{
                console.log(error);
            }
        );
    }


    useEffect(()=>{
        getAllCleanersFromServer();
    },[]);



    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Form>
            <FormGroup>
                <Label for="exampleCleaner">Select Cleaner</Label>
                <Input type="select" name="select" id="cleanerSelect" onChange={(e) => {
                    const cleanerName = e.target.value;
                    for(var i=0;i<cleaners.length;i++){
                        var obj = cleaners[i];
                        if(obj.name == cleanerName){
                            setCleaner(obj)
                            if(obj.weekday == "MWF"){
                                week.push(["Monday","Wednesday","Friday"])
                            }
                            else{
                                week.push(["Tuesday","Thursday","Saturday"])
                            }
                            setWeekdays(week)
                        }
                    }


                }}>
                    <option>[Select one]</option>
                    {
                        cleaners.length > 0 ? cleaners.map((item) => <option>{item.name}</option>) : "No Cleaners"
                    }
                </Input>
            </FormGroup>
            <Button color="primary" onClick={toggle}>Show Details</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Cleaner Details :</ModalHeader>
                <ModalBody>
                    Cleaner Name : {cleaner.name}<br/>
                    Floor assigned : {cleaner.floorNo}<br/>
                    Weekdays assigned : {weekdays.length >0 ? weekdays.map((item) => <option>{item + " "}</option>):"Not Working"}<br/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Go Back</Button>{' '}
                </ModalFooter>
            </Modal>
            <hr/>
        </Form>

    );
}

export default ShowCleaningStaff;
