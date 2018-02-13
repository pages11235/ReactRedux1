import * as ActionTypes from './contactActionTypes';
import * as Status from '../status';
import {Contact} from '../value-objects/Contact';

export function initializeContactActionCreator() {
    return {type: ActionTypes.INITIALIZE};
};

export function updateContactListActionCreator(contactListUpdate) {
    return {type: ActionTypes.UPDATE_CONTACT_LIST, contactListUpdate};
};

export class ContactListUpdate {
    constructor(status, contactList) {
        this.status = status;

        if (status === Status.FRESH) {
            this.contactList = contactList;
        } else {
            this.contactList = [];
        }
    }
}

export function updateWorkingContactActionCreator(workingContactUpdate) {
    return {type: ActionTypes.UPDATE_WORKING_CONTACT, workingContactUpdate};
};

export class WorkingContactUpdate {
    constructor(status, workingContact) {
        this.status = status;

        if (status === Status.FRESH) {
            this.workingContact = workingContact;
        } else {
            this.workingContact = new Contact();
        }
    }
}