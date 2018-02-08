import {updateContactListActionCreator, ContactListUpdate} from '../redux/actions/contactActionCreators';
import {Contact} from './Contact';

let modelContactList = [];

export function updateContactList(dispatch, successCB, failCB) {
    dispatch(updateContactListActionCreator(new ContactListUpdate(true, false, [])));

    const promise = new Promise((resolveCB, rejectCB) => {
        setTimeout(() => {
            const nextContactList = modelContactList.map(contact => {
                const newContact = new Contact();
                newContact.populateFromDto(contact);
                return newContact;
            });
            resolveCB(nextContactList);
        }, 2000);
    });
    promise.then((nextContactList) => {
        dispatch(updateContactListActionCreator(new ContactListUpdate(false, false, nextContactList)));
        successCB();
    }, (error) => {
        failCB(error);
    });
}

export function addContact(addedContact, dispatch, successCB, failCB) {
    const promise = new Promise((resolveCB, rejectCB) => {
        setTimeout(() => {
            const maxContactId = Math.max(0, ...modelContactList.map(contact => contact.contactId));
            addedContact.contactId = maxContactId + 1;
            modelContactList.push(addedContact);
            modelContactList.sort(contactCompare);
            resolveCB("Contact added.");
            dispatch(updateContactListActionCreator(new ContactListUpdate(false, true, [])));
        }, 2000);
    });
    promise.then((message) => {
        successCB(message);
    }, (error) => {
        failCB(error);
    });
}

export function updateContact(updatedContact, dispatch, successCB, failCB) {
    const promise = new Promise((resolveCB, rejectCB) => {
        setTimeout(() => {
            modelContactList = modelContactList.filter(listContact => listContact.contactId !== updatedContact.contactId);
            modelContactList.push(updatedContact);
            modelContactList.sort(contactCompare);
            resolveCB("Contact updated.");
            dispatch(updateContactListActionCreator(new ContactListUpdate(false, true, [])));
        }, 2000);
    });
    promise.then((message) => {
        successCB(message);
    }, (error) => {
        failCB(error);
    });
}

function contactCompare(a, b) {
    if (a === b) 
        return 0;
    if (a.lastName.localeCompare(b.lastName) !== 0) 
        return a.lastName.localeCompare(b.lastName);
    return a
        .firstName
        .localeCompare(b.firstName);
}