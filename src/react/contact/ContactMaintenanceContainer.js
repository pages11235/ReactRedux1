import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ContactMaintenance from './ContactMaintenance';
import {Contact} from '../../model/Contact';
import {retrieveContact, addContact, updateContact} from '../../model/modelApi';

class ContactMaintenanceContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        const contactId = parseInt(props.match.params.id, 10);

        this.state = {
            contactId: contactId,
            contact: contactId === 0
                ? new Contact()
                : null,
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
        if (!this.state.contact) {
            retrieveContact(this.state.contactId, contact => {
                this.setState(() => {
                    return {contact: contact};
                })
            }, error => {
                alert(error);
            });
        }

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
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
};

const decoratedContactMaintenanceContainer = connect(mapStateToProps, wrapActionCreatorsToProps)(ContactMaintenanceContainer);

function mapStateToProps(reduxState, ownProps) {
    return {};
}

function wrapActionCreatorsToProps(dispatch) {
    return {actions: {}, dispatch};
}

export default decoratedContactMaintenanceContainer;