import React from "react";
import axios from "axios";
import {Input} from "reactstrap";

export default class AttendentList extends React.Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`http://localhost:8888/api/attendent`).then(res => {
            const persons = res.data;
            this.setState({ persons });
        });
    }

    render() {
        return (
            <Input type="select" name="select" id="exampleSelect" >
                {this.state.persons.map(person => <option>{person.name}</option>)}
            </Input>
        );
    }
}
