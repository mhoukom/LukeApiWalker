import React from "react";

const Error = (props) => {

    const image = require('./obiwan.jpeg');

    return (
        <div>
            <hr />
            <img src={image} alt="obiwan" />
            <h1>These aren't the droids you're looking for</h1>
        </div>
    );
}

export default Error;