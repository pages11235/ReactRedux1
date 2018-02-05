import * as contactTypes from '../actions/contactActionTypes';
import { ContactsState } from './ContactsState';

export function contactListReducer(previousContactsState, action) {
    switch (action.type) {
        case contactTypes.LIST_CONTACTS:
            const contactsState = new ContactsState(previousContactsState);
            
            return contactsState;
        case contactTypes.ADD_CONTACT:
             const contactsState = new ContactsState(previousContactsState);
             contactsState.push(action.contact);

            return contactsState;
        default:
            return previousContactsState;
    }
}