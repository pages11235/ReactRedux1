import React from 'react';
import {NavLink} from 'react-router-dom';

function ContactMaintenace(props) {
    return (
        <div>
            <span className="button" onClick={handleSave}>Save</span>
            &nbsp;
            <span className="button" onClick={handleCancel}>Cancel</span>
            <br/><br/>
            <span>First name:&nbsp;</span><input defaultValue={props.contact.firstName} />
            <span>Last name:&nbsp;</span><input defaultValue={props.contact.lastName} />
        </div>
    );

    function handleSave(e) {
        props.onAddHandler(props.contact);

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