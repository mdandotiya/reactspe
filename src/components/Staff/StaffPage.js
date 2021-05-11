import React from 'react'
import {ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody} from "reactstrap";
import Home from "../Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ShowAttendent from "./ShowAttendent";
import StaffMenu from "./StaffMenu";
import ShowFoodStaff from "./ShowFoodStaff";
import ShowComplaintStaff from "./ShowComplaintStaff";
import ShowCleaningStaff from "./ShowCleaningStaff";
import AddAttendent from "./AddAttendent";
import AddChef from "./AddChef";
import AddCleaningStaff from "./AddCleaningStaff";
import AddFood from "./AddFood";
import AddComplaintStaff from "./AddComplaintStaff";

const StaffPage=()=>{
    return(
        <div className="Login">
            <Router>
                <ToastContainer/>
                <Card className="my-2 bg-warning">
                    <CardBody>
                        <h1 className="text-center my-2">Welcome to the Staff Page</h1>
                    </CardBody>
                </Card>
                <Container>
                    <Row>
                        <Col md={4}>
                            <StaffMenu/>
                        </Col>
                        <Col md={8}>
                            <Route path="/" component={Home} exact/>
                            <Route path="/show-food-staff" component={ShowFoodStaff} exact/>
                            <Route path="/add-food-staff" component={AddChef} exact/>
                            <Route path="/show-attendent" component={ShowAttendent} exact/>
                            <Route path="/show-complaint-staff" component={ShowComplaintStaff} exact/>
                            <Route path="/show-cleaning-staff" component={ShowCleaningStaff} exact/>
                            <Route path="/add-attendent" component={AddAttendent} exact/>
                            <Route path="/add-cleaning-staff" component={AddCleaningStaff} exact/>
                            <Route path="/add-complaint-staff" component={AddComplaintStaff} exact/>
                            <Route path="/add-food-type" component={AddFood} exact/>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default StaffPage;