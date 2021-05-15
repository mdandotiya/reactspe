import React from 'react'
import {toast, ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";
import Patientmenu from "./Patientmenu";
import Home from "./Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AllPatients from "./AllPatients";
import AddPatients from "./AddPatients";
import AddHealth from "./AddHealth";
import AddDate from "./AddDate";
import ViewSuggestions from "./ViewSuggestions";
import Options from "./Options";
import ViewFastingSchedule from "./ViewFastingSchedule";

const PatientPage=(props)=>{

    const handleHome=()=>{
        let path = "/options";
        props.history.push(path);
    }

    const handleLogout=()=>{
        let path = "/logout";
        props.history.push(path);
    }

    return(
        <div className="Login">
            <Router>
            <ToastContainer/>
            <Card className="my-2 bg-warning">
                <CardBody>
                    <h1 className="text-center my-2">Welcome to the Patient Page</h1>
                    <Button color = "warning" onClick={()=>{
                        handleHome();
                    }}>Home</Button>
                    <Button color = "danger" onClick={()=>{
                        handleLogout();
                        toast("Logged Out!!")
                    }}>Logout</Button>
                </CardBody>
            </Card>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Patientmenu/>
                        </Col>
                        <Col md={8}>
                            <Route path="/" component={Options} exact/>
                            <Route path="/show-patients" component={AllPatients} exact/>
                            <Route path="/add-patient" component={AddPatients} exact/>
                            <Route path="/add-patient-health" component={AddHealth} exact/>
                            <Route path="/add-patient-date" component={AddDate} exact/>
                            <Route path="/show-patient-date" component={ViewFastingSchedule} exact/>
                            <Route path="/view-suggestion" component={ViewSuggestions} exact/>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default PatientPage;