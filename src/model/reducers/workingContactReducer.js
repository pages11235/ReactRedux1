import * as contactActionTypes from '../actions/contactActionTypes';
import * as Status from '../status';
import {Contact} from '../value-objects/Contact';

export default function workingContactReducer(previousWorkingContactState, action) {
    switch (action.type) {
        case contactActionTypes.UPDATE_WORKING_CONTACT:
            {
                const update = action.workingContactUpdate;
                const workingContactState = new WorkingContactState(update.status, update.workingContact);

                return workingContactState;
            }
        case contactActionTypes.INITIALIZE:
            {
                const workingContactState = new WorkingContactState(Status.STALE, new Contact());

                return workingContactState;
            }
        default:
            return (previousWorkingContactState === undefined
                ? null
                : previousWorkingContactState);
    }
}

export class WorkingContactState {
    constructor(status, workingContact) {
        this.status = status;
        this.workingContact = workingContact;
    }
}