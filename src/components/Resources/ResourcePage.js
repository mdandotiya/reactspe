import React from 'react'
import {toast, ToastContainer} from "react-toastify";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";
import Home from "../Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Resourcemenu from "./Resourcemenu";
import ShowRooms from "./ShowRooms";
import ShowHealthEquipments from "./ShowHealthEquipments";
import ShowLuxuryResources from "./ShowLuxuryResources";
import AddRoom from "./AddRoom";
import AddHealthEquipment from "./AddHealthEquipment";
import AddLuxuryResource from "./AddLuxuryResource";
import AssignHE from "./AssignHealthEquipment";
import AssignLR from "./AssignLuxuryResource";

const ResourcePage=(props)=>{

    const handleHome=()=>{
        let path = "/options";
        props.history.push(path);
    }

    const handleLogout=()=> {
        let path = "/logout";
        props.history.push(path);
    }

        return(
        <div className="Login">
            <Router>
                <ToastContainer/>
                <Card className="my-2 bg-warning">
                    <CardBody>
                        <h1 className="text-center my-2">Welcome to the Resource Page</h1>
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
                            <Resourcemenu/>
                        </Col>
                        <Col md={8}>
                            <Route path="/" component={Home} exact/>
                            <Route path="/show-rooms" component={ShowRooms} exact/>
                            <Route path="/add-room" component={AddRoom} exact/>
                            <Route path="/show-hce" component={ShowHealthEquipments} exact/>
                            <Route path="/show-le" component={ShowLuxuryResources} exact/>
                            <Route path="/add-hce" component={AddHealthEquipment} exact/>
                            <Route path="/add-le" component={AddLuxuryResource} exact/>
                            <Route path="/assign-he" component={AssignHE} exact/>
                            <Route path="/assign-le" component={AssignLR} exact/>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default ResourcePage;