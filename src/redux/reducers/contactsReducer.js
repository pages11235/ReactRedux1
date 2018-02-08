import * as contactActionTypes from '../actions/contactActionTypes';

export default function contactsReducer(previousContactsState, action) {
    // Happens during intitialization
    if (previousContactsState === undefined) {
        console.log("Initial dispatch...");
        const contactsState = new ContactsState(false, true, []);

        return contactsState;
    }

    switch (action.type) {
        case contactActionTypes.UPDATE_CONTACT_LIST:
            {
                const update = action.contactListUpdate;
                console.log("Dispatch: " + update.refreshing + ", " + update.dirty + ", " + update.contactList + ".");
                const contactsState = new ContactsState(update.refreshing, update.dirty, update.contactList);

                return contactsState;
            }
        default:
            return previousContactsState;
    }
}

export class ContactsState {
    constructor(refreshing, dirty, contactList) {
        this.refreshing = refreshing;
        this.dirty = dirty;
        this.contactList = contactList;
    }
}