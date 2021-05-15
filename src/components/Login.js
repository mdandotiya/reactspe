import React from "react";
import {Jumbotron, Row, Col, Button} from "reactstrap";
import {
    Card,
    CardBody,
    Container,
} from "reactstrap";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { withRouter } from "react-router-dom";
import {AvField, AvForm} from "availity-reactstrap-validation";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {useState,useEffect} from "react";
import Header from "./Header";
import Home from "./Home";



const Login=(props)=>{

    const routeChange=()=> {
        let path = "/options";
        props.history.push(path);
    }

    const [login,setLogin] = useState({});

    const handleValidSubmit = (event, values) => {
        setLogin({ email: values.email });
        // const json = JSON.stringify({email:values.email, password:values.password});
        axios.get(`http://localhost:8888/api/admin`).then(
            (response) => {
                if(response.data.username === values.email && response.data.password === values.password){
                    toast("Login Successful");
                    routeChange()
                }
                else{
                    toast("Invalid Username or Password")
                }
                console.log(response.data.username);
                console.log("success");
            },
            (error) => {
                console.log(error);
                console.log("error");
            }
        );
        console.log(`Login Successful`);
    };

    const  handleInvalidSubmit = (event, errors, values) => {
        setLogin({ email: values.email, error: true });
        console.log(`Login failed`);
    };

    return(

        <div className="Login">
            <ToastContainer/>
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
                                    <AvForm
                                        onValidSubmit={handleValidSubmit}
                                        onInvalidSubmit={handleInvalidSubmit}
                                    >
                                        <AvField
                                            name="email"
                                            label="Email"
                                            type="text"
                                            validate={{
                                                required: true,
                                                email: true
                                            }}
                                        />
                                        <AvField
                                            name="password"
                                            label="Password"
                                            type="password"
                                            validate={{
                                                required: {
                                                    value: true,
                                                    errorMessage: "Please enter your password"
                                                },
                                                pattern: {
                                                    value: "^[A-Za-z0-9]+$",
                                                    errorMessage:
                                                        "Your password must be composed only with letter and numbers"
                                                },
                                                minLength: {
                                                    value: 6,
                                                    errorMessage: "Your password must be between 6 and 16 characters"
                                                },
                                                maxLength: {
                                                    value: 16,
                                                    errorMessage: "Your password must be between 6 and 16 characters"
                                                }
                                            }}
                                        />
                                        <Button id="submit" classname="login100-form-btn">Submit</Button>
                                    </AvForm>
                                </CardBody>
                            </Card>
                        </Jumbotron>
                    </Col>
                    <Col />
                </Row>
            </Container>
            <Home/>
        </div>
    );

}

export default withRouter(Login);