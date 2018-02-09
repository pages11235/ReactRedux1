import * as contactActionTypes from '../actions/contactActionTypes';

export default function contactsReducer(previousContactsState, action) {
    // Happens during intitialization
    if (previousContactsState === undefined) {
        const contactsState = new ContactsState(false, true, []);

        return contactsState;
    }

    switch (action.type) {
        case contactActionTypes.UPDATE_CONTACT_LIST:
            {
                const update = action.contactListUpdate;
                const contactsState = new ContactsState(update.contactList);

                return contactsState;
            }
        default:
            return previousContactsState;
    }
}

export class ContactsState {
    constructor(contactList) {
        this.contactList = contactList;
    }
}