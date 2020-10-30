import React from "react";
import "./style.css";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';




const JumbotronComp = (props) => (

<Jumbotron fluid className="jumbotronStyle">
    <hr></hr>
  <h1 className="display-3">Employee Directory</h1>
  <br></br>
  <br></br> 
  <Form inline>
      <FormControl type="text" placeholder="Search Employee" className="mr-sm-2" {...() => props.searchEmployee(props.name)}/>
      <Button variant="dark" size="sm" onClick={() => props.searchEmployee(props.name)}>Submit</Button>
    </Form>
    <br></br>
<hr></hr>
</Jumbotron>

)

export default JumbotronComp;
