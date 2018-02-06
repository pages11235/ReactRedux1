import * as contactTypes from '../actions/contactActionTypes';
import {ContactsState} from './ContactsState';
import {Contact} from '../model/Contact';

export default function contactsReducer(previousContactsState, action) {
    // Happens during intitialization
    if (previousContactsState === undefined) {
        const contactsState = new ContactsState(null);

        const contact = new Contact();
        contact.contactId = 1;
        contact.firstName = "Joe";
        contact.lastName = "Bloggs";

        contactsState
            .contactList
            .push(contact);

        return contactsState;
    }

    switch (action.type) {
        case contactTypes.LIST_CONTACTS:
            {
                const contactsState = new ContactsState(previousContactsState);

                return contactsState;
            }
        case contactTypes.ADD_CONTACT:
            {
                const contactsState = new ContactsState(previousContactsState);
                contactsState.push(action.contact);

                return contactsState;
            }
        default:
            return previousContactsState;
    }
}