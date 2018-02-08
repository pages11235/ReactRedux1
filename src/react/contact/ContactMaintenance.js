import React from 'react';

import Waiting from '../common/Waiting';

function ContactMaintenace(props) {
    const contact = props.contact;

    if(!contact) {
        return (
            <Waiting shouldDisplay={true}/>
        );
    }

    return (
        <div>
            <span className="button" onClick={e => props.onSaveClickHandler()}>Save</span>
            &nbsp;
            <span className="button" onClick={e => props.onCancelClickHandler()}>Cancel</span>
            <br/><br/>
            <span>First name:&nbsp;</span><input
                defaultValue={contact.firstName}
                onChange={e => props.onFirstNameChangeHandler(e.target.value)}/>
            <span>Last name:&nbsp;</span><input
                defaultValue={contact.lastName}
                onChange={e => props.onLastNameChangeHandler(e.target.value)}/>
        </div>
    );
};

export default ContactMaintenace;