export class ContactsState {
    constructor(previousContactsState) {
        this.contactList = [];

        if (previousContactsState) {
            this.contactList = previousContactsState.contactList;
        }
    }
}