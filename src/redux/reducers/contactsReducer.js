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

                contactsState.contactList.sort((a, b) => {
                    if (a === b) return 0;
                    if (a.lastName.localeCompare(b.lastName) !== 0) return a.lastName.localeCompare(b.lastName);
                    return a.firstName.localeCompare(b.lastName);
                });

                return contactsState;
            }
        case contactTypes.ADD_CONTACT:
            {
                const contactsState = new ContactsState(previousContactsState);

                const maxContactId = Math.max(...contactsState.contactList.map(contact => contact.contactId));
                const contact = action.contact;
                contact.contactId = maxContactId + 1;

                contactsState.contactList.push(contact);

                return contactsState;
            }
        case contactTypes.UPDATE_CONTACT:
            {
                const contactsState = new ContactsState(previousContactsState);

                contactsState.contactList = contactsState.contactList.filter(contact => contact.contactId !== action.contact.contactId);
                contactsState.contactList.push(action.contact);

                return contactsState;
            }
        default:
            return previousContactsState;
    }
}