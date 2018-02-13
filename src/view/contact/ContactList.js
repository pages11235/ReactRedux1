import React from 'react';
import {NavLink} from 'react-router-dom';

import Waiting from '../common/Waiting';

function ContactList(props) {
    return (
        <div>
            <NavLink to="/contact/id/0" component="Contact" className="button">Add Contact</NavLink>
            <Waiting shouldDisplay={props.isWaiting}/>
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
                    {renderDetail(props.contactList)}
                </tbody>
            </table>
        </div>
    );
};

function renderDetail(contactList) {
    let jsxOutput = contactList.map(contact => (
        <tr key={contact.contactId}>
            <td>
                <NavLink
                    to={`/contact/id/${contact.contactId}`}
                    component="Contact"
                    className="buttonSmall">&nbsp;</NavLink>
            </td>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
        </tr>
    ));

    return jsxOutput;
}

export default ContactList;