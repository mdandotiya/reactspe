import React from "react";
import {Button} from "reactstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Redirect,Link} from 'react-router-dom';

// reactstrap components
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import './Optionstyle.css';
import PatientPage from "./PatientPage";
import ResourcePage from "./Resources/ResourcePage";
import StaffPage from "./Staff/StaffPage";
import Page from "./LinkedBodies/Page";

function Options() {

    const onSubmit = () => {
        return  <Redirect  to="/patient-page" />
    }

    return (
        <Router>
            <Route path="/patient-page" component={PatientPage} exact/>
            <Route path="/resource-page" component={ResourcePage} exact/>
            <Route path="/staff-page" component={StaffPage} exact/>
            <Route path="/LB-page" component={Page} exact/>
            <div className=" card-group">
                <Card style={{marginLeft:'25px',marginRight:'25px',marginTop:'50px',marginBottom:'500px'}}>
                    <CardImg
                        alt="..."
                        src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
                        top
                    ></CardImg>
                    <CardBody classname="option-card">
                        <CardTitle>Patient</CardTitle>
                        <CardText>
                            Here you can view , add , delete and update the patient details.
                        </CardText>
                        <CardText>
                            <small className=" text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        <Link to="/patient-page">Dashboard</Link>
                    </CardBody>
                </Card>
                <Card style={{marginLeft:'25px',marginRight:'25px',marginTop:'50px',marginBottom:'500px'}}>
                    <CardImg
                        alt="..."
                        src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
                        top
                    ></CardImg>
                    <CardBody>
                        <CardTitle>Resources</CardTitle>
                        <CardText>
                            Here you can view , add , delete and update the resource details.
                        </CardText>
                        <CardText>
                            <small className=" text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        <Button
                            color="primary"
                            href="/resource-page"
                            onClick={onSubmit}
                        >
                            Lets Go
                        </Button>
                    </CardBody>
                </Card>
                <Card style={{marginLeft:'25px',marginRight:'25px',marginTop:'50px',marginBottom:'500px'}}>
                    <CardImg
                        alt="..."
                        src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
                        top
                    ></CardImg>
                    <CardBody>
                        <CardTitle>Staff</CardTitle>
                        <CardText>
                            Here you can view , add , delete and update the staff details.
                        </CardText>
                        <CardText>
                            <small className=" text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        <Link to="/staff-page">Dashboard</Link>
                    </CardBody>
                </Card>
                <Card style={{marginLeft:'25px',marginRight:'25px',marginTop:'50px',marginBottom:'500px'}}>
                    <CardImg
                        alt="..."
                        src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
                        top
                    ></CardImg>
                    <CardBody>
                        <CardTitle>Connected Bodies</CardTitle>
                        <CardText>
                            Here you can view , add , delete and update the connected bodies details.
                        </CardText>
                        <CardText>
                            <small className=" text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        <Link to="/LB-page">Dashboard</Link>
                    </CardBody>
                </Card>
            </div>
        </Router>
    );
}

export default Options;

