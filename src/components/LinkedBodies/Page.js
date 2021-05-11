import React from 'react'
import {ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody} from "reactstrap";
import Home from "../Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Menu from "./Menu"
import ShowHospitals from "./ShowHospitals";
import AddHospital from "./AddHospital";
import ShowDoctors from "./ShowDoctors";
import ShowCabServices from "./ShowCabServices";
import AddCabServices from "./AddCabServices";
import ShowCabs from "./ShowCabs";
import ShowNgo from "./ShowNgo";
import AddNgo from "./AddNgo";


const Page=()=>{
    return(
        <div className="Login">
            <Router>
                <ToastContainer/>
                <Card className="my-2 bg-warning">
                    <CardBody>
                        <h1 className="text-center my-2">Welcome to the Linked Body Page</h1>
                    </CardBody>
                </Card>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Menu/>
                        </Col>
                        <Col md={8}>
                            <Route path="/" component={Home} exact/>
                            <Route path="/show-hospitals" component={ShowHospitals} exact/>
                            <Route path="/add-hospital" component={AddHospital} exact/>
                            <Route path="/show-doctors" component={ShowDoctors} exact/>
                            <Route path="/show-cab-service" component={ShowCabServices} exact/>
                            <Route path="/add-cab-service" component={AddCabServices} exact/>
                            <Route path="/show-cab-details" component={ShowCabs} exact/>
                            <Route path="/show-ngo" component={ShowNgo} exact/>
                            <Route path="/add-ngo" component={AddNgo} exact/>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default Page;