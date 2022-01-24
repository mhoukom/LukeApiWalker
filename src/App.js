import React from "react";
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import Planet from "./Components/Planet";
import People from "./Components/People";
import Error from "./Components/Error";
    
function App() {

  return ( 
    <div className="App">
      <BrowserRouter>
        {/* Home is always there and doesn't switch */}
        <Home/>
        <Switch>
          {/* instantiates the components when history navigation is changed */}
          <Route path="/people" component={People}/>
          <Route path="/planets" component={Planet}/>
          <Route path="/error" component={Error}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
    
export default App;