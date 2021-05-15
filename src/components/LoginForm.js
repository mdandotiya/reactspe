import React from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from "axios";
import {toast} from "react-toastify";
import { withRouter } from "react-router-dom";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: false };
        this.routeChange = this.routeChange.bind(this);
    }



    routeChange() {
        let path = "/options";
        this.props.history.push(path);
    }

    handleValidSubmit = (event, values) => {
        this.setState({ email: values.email });
       // const json = JSON.stringify({email:values.email, password:values.password});
        axios.get(`http://localhost:8888/api/admin`).then(
            (response) => {
                if(response.data.username === values.email && response.data.password === values.password){
                    toast("Login Successful");
                        this.routeChange()
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

    handleInvalidSubmit = (event, errors, values) => {
        this.setState({ email: values.email, error: true });
        console.log(`Login failed`);
    };

    render() {
        return (
            <AvForm
                onValidSubmit={this.handleValidSubmit}
                onInvalidSubmit={this.handleInvalidSubmit}
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
        );
    }
}


