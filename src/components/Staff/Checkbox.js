import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import axios from "axios";
import {useEffect} from "react";

const Example = () => {
    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry", disabled: true },
        { label: "Watermelon 🍉", value: "watermelon" },
        { label: "Pear 🍐", value: "pear" },
        { label: "Apple 🍎", value: "apple" },
        { label: "Tangerine 🍊", value: "tangerine" },
        { label: "Pineapple 🍍", value: "pineapple" },
        { label: "Peach 🍑", value: "peach" },
    ];
    const[staff,setStaff] = useState({});
    const[complaints,setComplaints] = useState([]);
    const[complaint,setComplaint] = useState([]);
    const[result,setResult] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8888/api/complaint`).then(res => {
            const persons = res.data;
            console.log(persons);
            setComplaints(persons);
            console.log(complaints);
        });
    },[]);

    const [selected, setSelected] = useState([]);

    return (
        <div>
            <h1>Select Fruits</h1>
            <pre>{JSON.stringify(selected)}</pre>
            <MultiSelect
                options={complaints}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
            />
        </div>
    );
};

export default Example;