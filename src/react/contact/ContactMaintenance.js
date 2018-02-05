import React from 'react';
import {NavLink} from 'react-router-dom';

function ContactMaintenace(props) {
    return (
        <div>
            <span className="button" onClick={handleSave}>Save</span>
            &nbsp;
            <NavLink to="/contact/list" component="Contact" className="button">Cancel</NavLink>
        </div>
    );

    function handleSave(e) {
        props
            .history
            .push("/contact/list");
    }
};

export default ContactMaintenace;