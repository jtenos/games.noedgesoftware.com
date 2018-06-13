import React from "react";
import jQuery from "jquery";
import { render } from "react-dom";
import { Nav } from "./components/nav";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    
    render() {
        return (
            <div>
                <Nav />
                <h1>Hello!</h1>
            </div>
        );
    }
    
}

jQuery(() => {
    render(<App />, jQuery("#the-body")[0]);
});
