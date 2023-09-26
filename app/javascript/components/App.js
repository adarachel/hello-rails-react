import React from "react";
import Greeting from "./Greeting";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Greeting} />
            </div>
        </Router>
    );
}

export default App;
