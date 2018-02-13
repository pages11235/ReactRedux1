import React from 'react';
import {Router, Route} from 'react-router-dom';
import {browserHistory} from '../../controller/controller';
import ContactListContainer from './ContactListContainer';
//import ContactMaintenanceContainer from './ContactMaintenanceContainer';

function ContactPage(props) {
    return (
        <Router history={browserHistory}>
            <div>
                <h2>Your Contacts</h2>
                <div>
                    <Route path="/contact/list" component={ContactListContainer}/>
                </div>
            </div>
        </Router>
    );
};

export default ContactPage;
//                     <Route path="/contact/id/:id" component={ContactMaintenanceContainer}/>
