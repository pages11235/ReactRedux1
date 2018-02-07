import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as contactActionCreators from '../../redux/actions/contactActionCreators';
import ContactMaintenance from './ContactMaintenance';
import {Contact} from '../../redux/model/Contact';

class ContactMaintenanceContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contact: this.props.contact
        };

        this.onSaveClickHandlerBound = this
            .onSaveClickHandler
            .bind(this);
        this.onCancelClickHandlerBound = this
            .onCancelClickHandler
            .bind(this);
        this.onFirstNameChangeHandlerBound = this
            .onFirstNameChangeHandler
            .bind(this);
        this.onLastNameChangeHandlerBound = this
            .onLastNameChangeHandler
            .bind(this);
    }

    render() {
        return (<ContactMaintenance
            contact={this.state.contact}
            onSaveClickHandler={this.onSaveClickHandlerBound}
            onCancelClickHandler={this.onCancelClickHandlerBound}
            onFirstNameChangeHandler={this.onFirstNameChangeHandlerBound}
            onLastNameChangeHandler={this.onLastNameChangeHandlerBound}/>)
    }

    onSaveClickHandler() {
        if (this.state.contact.contactId === 0) {
            this
                .props
                .actions
                .addContactActionCreator(this.state.contact);
        } else {
            // do update instead
        }

        this
            .props
            .actions
            .listContactsActionCreator();

        this
            .props
            .history
            .push("/contact/list");
    }

    onCancelClickHandler() {
        this
            .props
            .actions
            .listContactsActionCreator();

        this
            .props
            .history
            .push("/contact/list");
    }

    onFirstNameChangeHandler(value) {
        this.setState((previousState, props) => {
            const contact = previousState.contact;
            contact.firstName = value;

            return {contact};
        });
    }

    onLastNameChangeHandler(value) {
        this.setState((previousState, props) => {
            const contact = previousState.contact;
            contact.lastName = value;

            return {contact};
        });
    }
}

ContactMaintenanceContainer.propTypes = {
    // injected by connect() below
    contact: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const decoratedContactMaintenanceContainer = connect(mapStateToProps, wrapActionCreatorsToProps)(ContactMaintenanceContainer);

function mapStateToProps(reduxState, ownProps) {
    const contactId = parseInt(ownProps.match.params.id, 10);

    let contact = new Contact();
    if (contactId !== 0) {
        contact.populateFromDto(reduxState.contactsState.contactList.filter(listContact => listContact.contactId === contactId)[0]);
    }

    return {contact};
}

function wrapActionCreatorsToProps(dispatch) {
    return {
        // refactor
        actions: bindActionCreators(contactActionCreators, dispatch)
    };
}

export default decoratedContactMaintenanceContainer;