import {LIST_CONTACTS, ADD_CONTACT, UPDATE_CONTACT} from './contactActionTypes';

export function listContactsActionCreator() {
    return {type: LIST_CONTACTS, contact: null};
};

export function addContactActionCreator(contact) {
    return {type: ADD_CONTACT, contact: contact};
}

export function updateContactActionCreator(contact) {
    return {type: UPDATE_CONTACT, contact: contact};
}