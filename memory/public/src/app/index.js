import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";
import Button from '@material-ui/core/Button';
import { Nav } from "./components/nav";
import { SimpleBottomNavigation } from "./components/bottom-nav";

class App extends React.Component {
    
    render() {
        return (
            <div>
                <Nav />
                <h1>Hello!</h1>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                <SimpleBottomNavigation classes="" />
            </div>
        );
    }
    
}

jQuery(() => {
    ReactDOM.render(<App />, jQuery("#the-body")[0]);
});
