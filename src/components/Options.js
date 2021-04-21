import React from "react";
import {Button} from "reactstrap";

// reactstrap components
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

import './Optionstyle.css';

function Options() {
    return (
        <>
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
                        <Button
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
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
                        <CardTitle>Resources</CardTitle>
                        <CardText>
                            Here you can view , add , delete and update the resource details.
                        </CardText>
                        <CardText>
                            <small className=" text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        <Button
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
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
                        <Button
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
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
                        <CardTitle>Connected Bodies</CardTitle>
                        <CardText>
                            Here you can view , add , delete and update the connected bodies details.
                        </CardText>
                        <CardText>
                            <small className=" text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        <Button
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            Lets Go
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default Options;

