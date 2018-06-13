import React from "react";

export class Nav extends React.Component {
  
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">Memory</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">One Player</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="two-player-toggle-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Two Player</a>
                            <div className="dropdown-menu" aria-labelledby="two-player-toggle-link">
                                <a className="dropdown-item" href="#">Same Device</a>
                                <a className="dropdown-item" href="#">Two Devices</a>
                                <a className="dropdown-item" href="#">Player vs. Computer</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
  
}
