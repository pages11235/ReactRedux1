import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ContactMaintenance from './ContactMaintenance';
import {Contact} from '../../model/Contact';
import {addContact, updateContact} from '../../model/modelApi';

class ContactMaintenanceContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contact: this.props.contact,
            dispatch: this.props.dispatch
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
        const parent = this;
        if (this.state.contact.contactId === 0) {
            addContact(this.state.contact, this.state.dispatch, function () {
                parent
                    .props
                    .history
                    .push("/contact/list");
            }, function (error) {
                alert(error);
            });
        } else {
            updateContact(this.state.contact, this.state.dispatch, function () {
                parent
                    .props
                    .history
                    .push("/contact/list");
            }, function (error) {
                alert(error);
            });
        }

    }

    onCancelClickHandler() {
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
        // TODO: retrieve contact from model
    }

    return {contact};
}

function wrapActionCreatorsToProps(dispatch) {
    return {actions: {}, dispatch};
}

export default decoratedContactMaintenanceContainer;