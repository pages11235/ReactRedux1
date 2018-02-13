import React from 'react';

import Waiting from '../common/Waiting';

function ContactMaintenace(props) {
    if(props.isWaiting) {
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
                defaultValue={props.contact.firstName}
                onBlur={e => props.onFirstNameBlurHandler(e.target.value)}/>
            <br/>
            <span>Last name:&nbsp;</span><input
                defaultValue={props.contact.lastName}
                onBlur={e => props.onLastNameBlurHandler(e.target.value)}/>
        </div>
    );
};

export default ContactMaintenace;