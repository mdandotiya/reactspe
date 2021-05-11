import React from 'react';
import {ListGroup,ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const Menu=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/">Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-hospitals">Hospital Details</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-hospital">Add a Hospital</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-doctors">Show Doctors</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-ngo">Show NGOs</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-ngo">Add NGO</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-cab-service">Show Cab Service</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-cab-service">Add Cab Service</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-cab-details">Show Cab Details</Link>
        </ListGroup>

    );
}

export default Menu;