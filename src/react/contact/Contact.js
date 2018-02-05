import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import ContactList from './ContactList';
import ContactMaintenance from './ContactMaintenance';

function Contact(props) {
    return (
        <BrowserRouter>
            <div>
                <h2>Your Contacts</h2>
                <div>
                    <Route path="/contact/list" component={ContactList}/>
                    <Route path="/contact/id/:id" component={ContactMaintenance}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Contact;