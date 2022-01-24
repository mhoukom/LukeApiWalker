import React from "react";

const Planet = (props) => {
    
    // pull the api response data from navigation route
    const planet = props.location.state;

    return (
        <div>
            <h1>Name: {planet.name}</h1>
            <h1>Population: {planet.population}</h1>
            <h1>Climate: {planet.climate}</h1>
            <h1>Terrain: {planet.terrain}</h1>
            <h1>Surface Water: {planet.surface_water}</h1>
        </div>
    );
}

export default Planet;