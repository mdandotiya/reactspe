import React from 'react';
import {ListGroup} from "reactstrap";
import {Link} from "react-router-dom";

const StaffMenu=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/">Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-food-staff">Chef Details</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-food-staff">Add Chef</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-food-type">Add Food Type</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-attendent">Attendent Details</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-attendent">Add Attendent</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-complaint-staff">Complaint Staff Details</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-complaint-staff">Add Complaint Staff</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/show-cleaning-staff">Cleaning Staff Details</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-cleaning-staff">Add Cleaning Staff</Link>
        </ListGroup>

    );
}

export default StaffMenu;