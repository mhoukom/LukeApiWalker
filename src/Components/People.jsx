import React from "react";

const People = (props) => {

    // pull the api response data from navigation route
    const person = props.location.state;

    return (
        <div>
            <h1>Name: {person.name}</h1>
            <h1>Height: {person.height}</h1>
            <h1>Mass: {person.mass}</h1>
            <h1>Hair Color: {person.hair_color}</h1>
            <h1>Skin Color: {person.skin_color}</h1>
        </div>
    );
}

export default People;