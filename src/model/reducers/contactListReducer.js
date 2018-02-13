import * as contactActionTypes from '../actions/contactActionTypes';
import * as Status from '../status';

export default function contactListReducer(previousContactListState, action) {
    switch (action.type) {
        case contactActionTypes.UPDATE_CONTACT_LIST:
            {
                const update = action.contactListUpdate;
                const contactListState = new ContactListState(update.status, update.contactList);

                return contactListState;
            }
        case contactActionTypes.INITIALIZE:
            {
                const contactListState = new ContactListState(Status.STALE, []);

                return contactListState;
            }
        default:
            return (previousContactListState === undefined
                ? null
                : previousContactListState);
    }
}

export class ContactListState {
    constructor(status, contactList) {
        this.status = status;
        this.contactList = contactList;
    }
}