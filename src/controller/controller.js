import {createBrowserHistory} from 'history'

import configureStore from '../model/store/configureStore';
import {initializeContactActionCreator, updateContactListActionCreator, updateWorkingContactActionCreator, ContactListUpdate, WorkingContactUpdate} from '../model/actions/contactActionCreators';
import * as Status from '../model/status';
import {Contact} from '../model/value-objects/Contact';

export const browserHistory = createBrowserHistory();
export const reduxStore = configureStore();

let dummyExternalContactStore = [];

export function initializeController() {
    reduxStore.dispatch(initializeContactActionCreator());

    const contact = new Contact();
    contact.contactId = 1;
    contact.firstName = "Joe";
    contact.lastName = "Bloggs";

    dummyExternalContactStore.push(contact);
}

export function refreshContactList() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const nextContactList = dummyExternalContactStore.map(contact => {
                const newContact = new Contact();
                newContact.populateFromDto(contact);
                return newContact;
            });
            resolve(nextContactList);
        }, 2000);
    });
    promise.then(nextContactList => {
        reduxStore.dispatch(updateContactListActionCreator(new ContactListUpdate(Status.FRESH, nextContactList)));
    }, (error) => {
        // dispatch an error message
    });
}

export function markContactListStale() {
    reduxStore.dispatch(updateContactListActionCreator(new ContactListUpdate(Status.STALE)));
}

export function retrieveWorkingContact(contactId) {
    if (contactId === 0) {
        reduxStore.dispatch(updateWorkingContactActionCreator(new WorkingContactUpdate(Status.FRESH, new Contact())));

        return;
    }

    reduxStore.dispatch(updateWorkingContactActionCreator(new WorkingContactUpdate(Status.REFRESHING)));

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundContact = dummyExternalContactStore.filter(listContact => listContact.contactId === contactId)[0];
            resolve(foundContact);
        }, 2000);
    });
    promise.then(foundContact => {
        reduxStore.dispatch(updateWorkingContactActionCreator(new WorkingContactUpdate(Status.FRESH, foundContact)));
    }, error => {
        // dispatch an error message
    });
}

export function updateWorkingContactFirstName(updatedFirstName) {
    // clone the existing working contact
    const updatedWorkingContact = new Contact();
    updatedWorkingContact.populateFromDto(reduxStore.getState().workingContactState.workingContact);

    if (updatedWorkingContact.firstName === updatedFirstName) {
        return;
    }

    updatedWorkingContact.firstName = updatedFirstName;

    reduxStore.dispatch(updateWorkingContactActionCreator(new WorkingContactUpdate(Status.FRESH, updatedWorkingContact)));
}

export function updateWorkingContactLastName(updatedLastName) {
    // clone the existing working contact
    const updatedWorkingContact = new Contact();
    updatedWorkingContact.populateFromDto(reduxStore.getState().workingContactState.workingContact);

    if (updatedWorkingContact.lastName === updatedLastName) {
        return;
    }

    updatedWorkingContact.lastName = updatedLastName;

    reduxStore.dispatch(updateWorkingContactActionCreator(new WorkingContactUpdate(Status.FRESH, updatedWorkingContact)));
}

export function completeContactMaintenace() {
    let workingContact = reduxStore
        .getState()
        .workingContactState
        .workingContact;

    // Trigger the Waiting indicator
    reduxStore.dispatch(updateWorkingContactActionCreator(new WorkingContactUpdate(Status.STALE)));

    const promise = new Promise((resolve, reject) => {
        let worker;
        if (workingContact.contactId === 0) {
            worker = function () {
                const maxContactId = Math.max(0, ...dummyExternalContactStore.map(contact => contact.contactId));
                // clone so we can mutate something in Redux store
                workingContact = new Contact().populateFromDto(workingContact);
                workingContact.contactId = maxContactId + 1;
                dummyExternalContactStore.push(workingContact);
                dummyExternalContactStore.sort(contactCompare);
                resolve("Contact added.");
            };
        } else {
            worker = function () {
                dummyExternalContactStore = dummyExternalContactStore.filter(listContact => listContact.contactId !== workingContact.contactId);
                dummyExternalContactStore.push(workingContact);
                dummyExternalContactStore.sort(contactCompare);
                resolve("Contact updated.");
            };
        }
        setTimeout(worker, 2000);
    });
    promise.then((message) => {
        browserHistory.push("/contact/list");
    }, error => {
        // dispatch an error message
        reduxStore.dispatch(updateWorkingContactActionCreator(new WorkingContactUpdate(Status.FRESH, workingContact)));
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
export function cancelContactMaintenance() {
    reduxStore.dispatch(updateWorkingContactActionCreator(new WorkingContactUpdate(Status.STALE)));
    browserHistory.push("/contact/list");
}
