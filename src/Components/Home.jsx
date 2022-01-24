import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios';

const Home = (props) => {

    // keeping searchType & searchId in state to track user changes
    const [searchType, setSearchType] = useState("people");
    const [searchId, setSearchId] = useState("");

    // used for Switch navigation changes
    const history = useHistory();
    
    async function doSearch(event) {
        event.preventDefault();

        // dropping in two variables using string interpolation
        const apiUrl = `https://swapi.dev/api/${searchType}/${searchId}/`;

        // try catch block prevents an error blowing up the browser and allows navigation to error page
        try {
             // use axios library to retrieve data from the api and handle the promise
            const response = await axios.get(apiUrl);

            // use the switch to pass the response data to the appropriate component
            history.push({
                pathname: `/${searchType}`,
                state: response.data
            });
        }
        catch(error) {
            history.push({pathname: '/error'});
        }
    }

    return (
        <div>
            <form onSubmit={doSearch}>
                <p>Search for:</p>
                {/* onChange updates state */}
                <select value={searchType} onChange={(event) => {setSearchType(event.target.value);}}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <p>ID:</p>
                <input onChange={(event) => {setSearchId(event.target.value);}} type="text" value={searchId}/>
                <button>Search</button>
            </form>
        </div> 
    );
}

export default Home;