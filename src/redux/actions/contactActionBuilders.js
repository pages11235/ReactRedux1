import {LIST_CONTACTS, ADD_CONTACT} from './contactActionTypes';

export function listContactsActionBuilder() {
    return {type: LIST_CONTACTS, contact: null};
};

export function addContactActionBuilder(contact) {
    return {type: ADD_CONTACT, contact: contact};
}