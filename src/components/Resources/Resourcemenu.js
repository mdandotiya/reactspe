import React from 'react';
import {ListGroup,ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const Resourcemenu=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/">Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-rooms">Room Details</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-room">Add a Room</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-hce">Show Health Checking Equipments</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-hce">Add Health Checking Equipments</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/assign-he">Assign Health Equipment</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-le">Show Luxury Equipments</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-le">Add Luxury Equipment</Link>
        </ListGroup>

    );
}

export default Resourcemenu;