import {Contact} from '../model/Contact';

export class ContactsState {
    constructor(previousContactsState) {
        this.contactList = [];

        if (previousContactsState) {
            this.contactList = previousContactsState
                .contactList
                .map(contact => {
                    const newContact = new Contact();
                    newContact.populateFromDto(contact);
                    return newContact;
                });
        }
    }
}