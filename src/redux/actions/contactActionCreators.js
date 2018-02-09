import {UPDATE_CONTACT_LIST} from './contactActionTypes';

export function updateContactListActionCreator(contactListUpdate) {
    return {type: UPDATE_CONTACT_LIST, contactListUpdate};
};

export class ContactListUpdate {
    constructor(contactList) {
        this.contactList = contactList;
    }
}