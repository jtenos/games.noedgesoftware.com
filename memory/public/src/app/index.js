import React from "react";
import jQuery from "jquery";
import { render } from "react-dom";

class App extends React.Component {
    
    render() {
        return (
            <h1>Hello!</h1>
        );
    }
    
}

jQuery(() => {
    render(<App />, jQuery("#main-container")[0]);
});
