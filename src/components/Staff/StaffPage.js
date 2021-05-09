import React from 'react'
import {ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody} from "reactstrap";
import Home from "../Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Resourcemenu from "../Resources/Resourcemenu";
import ShowAttendent from "./ShowAttendent";
import StaffMenu from "./StaffMenu";
import ShowFoodStaff from "./ShowFoodStaff";

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
                            <Route path="/add-food-staff" component={Home} exact/>
                            <Route path="/show-attendent" component={ShowAttendent} exact/>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default StaffPage;