import React from 'react';
import {ListGroup,ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const Patientmenu=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/">Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-patients">Show all patients</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-patient">Add a Patient</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/edit-patient">Edit Patient Details</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/about">About us</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact">Contact us</Link>
        </ListGroup>

    );
}

export default Patientmenu;