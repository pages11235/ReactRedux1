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
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props
                        .contactList
                        .map(contact => {
                            return (
                                <tr>
                                    <td><NavLink key={contact.contactId} to={'/contact/id/' + contact.contactId} component="Contact" className="buttonSmall">&nbsp;</NavLink></td>
                                    <td>{contact.firstName}</td>
                                    <td>{contact.lastName}</td>
                                </tr>
                            );
                        })
}
                </tbody>
            </table>

        </div>
    );
};

export default ContactList;