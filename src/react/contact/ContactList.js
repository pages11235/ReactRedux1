import React from 'react';
import {NavLink} from 'react-router-dom';

function ContactList(props) {
    return (
        <div>
            <NavLink to="/contact/id/0" component="Contact" className="button">Add Contact</NavLink>
        </div>
    );
};

export default ContactList;