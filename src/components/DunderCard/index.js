import React from "react";
import './style.css';
import Card from 'react-bootstrap/Card';






const DunderCard = (props) => {

    return (
   
    <Card className="container-fluid mt-4">
        <Card.Img  variant="top" src={props.image} />
        <Card.Body>
            <Card.Text>
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Title:</strong> {props.title}
                    </li>
                    <li>
                        <strong>Phone:</strong> {props.phone}
                    </li>
                    <li>
                        <strong>Email:</strong> {props.email}
                    </li>
                </ul>
                <span {...() => props.searchEmployee(props.name)} />
            </Card.Text>
        </Card.Body>
    </Card>

    );

};


export default DunderCard;