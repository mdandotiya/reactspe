import React from "react";
import {Jumbotron,Row,Col} from "reactstrap";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Login=()=>{
    return(
        <div className="Login">
            <Container>
                <Row>
                    <Col />
                    <Col lg="5">
                        <Jumbotron style={{ width: '22rem'}}>
                            <h3>
                                <u>Login Form</u>
                            </h3>
                            <hr />
                            <Card style={{ width: '18rem',background:'violet'}}>
                                <CardBody>
                                    <LoginForm />
                                </CardBody>
                            </Card>
                        </Jumbotron>
                    </Col>
                    <Col />
                </Row>
            </Container>
        </div>
    );

}

export default Login;