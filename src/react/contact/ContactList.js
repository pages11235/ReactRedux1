import React from 'react';
import {NavLink} from 'react-router-dom';

function ContactList(props) {
    return (
        <div>
            <NavLink to="/contact/id/0" component="Contact" className="button">Add Contact</NavLink>
            <br/><br/>
            <table className="table">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>

        </div>
    );
};

export default ContactList;