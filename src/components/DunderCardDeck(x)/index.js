import React from "react";
// import "./style.css";

import CardDeck from 'react-bootstrap/CardDeck';


function DunderCardDeck(props) {

    return (
        <>
            <CardDeck className="dunderWrapper">{props.children}</CardDeck>

        </>
    );
};

export default DunderCardDeck;