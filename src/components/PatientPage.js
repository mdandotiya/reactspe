import React from 'react'
import {ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody} from "reactstrap";
import Patientmenu from "./Patientmenu";
import Home from "./Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AllPatients from "./AllPatients";
import AddPatients from "./AddPatients";

const PatientPage=()=>{
    return(
        <div className="Login">
            <Router>
            <ToastContainer/>
            <Card className="my-2 bg-warning">
                <CardBody>
                    <h1 className="text-center my-2">Welcome to the Patient Page</h1>
                </CardBody>
            </Card>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Patientmenu/>
                        </Col>
                        <Col md={8}>
                            <Route path="/" component={Home} exact/>
                            <Route path="/show-patients" component={AllPatients} exact/>
                            <Route path="/add-patient" component={AddPatients} exact/>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default PatientPage;