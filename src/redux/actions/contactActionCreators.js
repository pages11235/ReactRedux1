import {LIST_CONTACTS, ADD_CONTACT} from './contactActionTypes';

export function listContactsActionCreator() {
    return {type: LIST_CONTACTS, contact: null};
};

export function addContactActionCreator(contact) {
    return {type: ADD_CONTACT, contact: contact};
}