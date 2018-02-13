import React from 'react';
import {NavLink} from 'react-router-dom';

const headerStyle = {
    textAlign: "center"
};

function Header(props) {
    return (
        <div style={headerStyle}>
            <h1>Proof of Concept: 1</h1>
            <nav>
                <NavLink exact to="/" component="Home">Home</NavLink>
                {" | "}
                <NavLink to="/about" component="About">About</NavLink>
                {" | "}
                <NavLink to="/contact/list" component="Contact">Contact</NavLink>
            </nav>
            <hr /> 
        </div>
    );
};

export default Header;