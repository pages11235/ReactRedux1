import React from 'react';
import {NavLink} from 'react-router-dom';

function ContactMaintenace(props) {
    return (
        <div>
            <span className="button" onClick={handleSave}>Save</span>
            &nbsp;
            <span className="button" onClick={handleCancel}>Cancel</span>
            <br/><br/>
            <span>First name:&nbsp;</span><input
                defaultValue={props.contact.firstName}
                onChange={e => {props.contact.firstName = e.target.value}}/>
            <span>Last name:&nbsp;</span><input
                defaultValue={props.contact.lastName}
                onChange={e => {props.contact.lastName = e.target.value}}/>
        </div>
    );

    function handleSave(e) {
        if (props.contact.contactId === 0) {
        props.onAddHandler(props.contact);
        } else {
            // do update instead
        }

        props
            .history
            .push("/contact/list");
    }

    function handleCancel(e) {
        props.onListHandler();

        props
            .history
            .push("/contact/list");
    }
};

export default ContactMaintenace;