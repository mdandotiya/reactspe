import React from "react";
import {Jumbotron, Container, Button} from "reactstrap";

const Home=()=>{
    return(
        <Jumbotron className="text-center">
            <h1>Admin Login</h1>
            <div>
               <p>
                   This is the first part of SPE project , I want to develop a login page through React.
               </p>
                <Container>
                    <Button color="primary">Start Using</Button>
                </Container>
            </div>
        </Jumbotron>
    );
}

export default Home;