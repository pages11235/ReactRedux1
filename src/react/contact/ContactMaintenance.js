import React from 'react';

function ContactMaintenace(props) {
    const contact = props.contact;

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