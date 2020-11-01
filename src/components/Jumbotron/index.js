import React from "react";
import "./style.css";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import DunderLogo from "../../images/the_office_office_tag.png";




const JumbotronComp = (props) => (

  <Jumbotron fluid className="jumbotronStyle">
    <Image src={DunderLogo} className="responsiveDunder" />
    <br></br>
    <br></br>
    <Form inline>

      <FormControl type="text" placeholder="Search Directory By Name" className="mr-sm-2 regularInput responsiveInput textAlign" onChange={(e) => props.updateEmployeeData({ ...props.employeeData, searchQuery: e.target.value })} />

      {/* <Button variant="dark" size="sm" onClick={() => props.searchEmployee(props.name)}>Submit</Button> */}

    </Form>

    <Button variant="dark" size="sm" onClick={() => props.sortOrder(true)}>Sort Ascending</Button>
    {"‏‏‎ ‎‏‏‎ ‎‏‏‎‎"}
    <Button variant="dark" size="sm" onClick={() => props.sortOrder(false)}>Sort Descending</Button>
    {"‏‏‎ ‎‏‏‎ ‎‏‏‎‎"}
    <br></br>
    <br></br>


  </Jumbotron>

)

export default JumbotronComp;
