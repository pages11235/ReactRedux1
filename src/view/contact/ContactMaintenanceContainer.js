import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ContactMaintenance from './ContactMaintenance';
import * as Status from '../../model/status';
import {retrieveWorkingContact, updateWorkingContactFirstName, updateWorkingContactLastName, completeContactMaintenace, cancelContactMaintenance} from '../../controller/controller';

class ContactMaintenanceContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onSaveClickHandlerBound = this
            .onSaveClickHandler
            .bind(this);
        this.onCancelClickHandlerBound = this
            .onCancelClickHandler
            .bind(this);
        this.onFirstNameBlurHandlerBound = this
            .onFirstNameBlurHandler
            .bind(this);
        this.onLastNameBlurHandlerBound = this
            .onLastNameBlurHandler
            .bind(this);
    }

    render() {
        return (<ContactMaintenance
            isWaiting={(this.props.status !== Status.FRESH)}
            contact={this.props.contact}
            onSaveClickHandler={this.onSaveClickHandlerBound}
            onCancelClickHandler={this.onCancelClickHandlerBound}
            onFirstNameBlurHandler={this.onFirstNameBlurHandlerBound}
            onLastNameBlurHandler={this.onLastNameBlurHandlerBound}/>)
    }

    componentDidMount() {
        const contactId = parseInt(this.props.match.params.id, 10);
        retrieveWorkingContact(contactId);
    }

    onSaveClickHandler() {
        completeContactMaintenace();
    }

    onCancelClickHandler() {
        cancelContactMaintenance();
    }

    onFirstNameBlurHandler(updatedFirstName) {
        updateWorkingContactFirstName(updatedFirstName);
    }

    onLastNameBlurHandler(updatedLastName) {
        updateWorkingContactLastName(updatedLastName);
    }
}

ContactMaintenanceContainer.propTypes = {
    // injected by connect() below
    status: PropTypes.string.isRequired,
    contact: PropTypes.object.isRequired
};

const decoratedContactMaintenanceContainer = connect(mapStateToProps, wrapActionCreatorsToProps)(ContactMaintenanceContainer);

function mapStateToProps(reduxState, ownProps) {
    return {"status": reduxState.workingContactState.status, "contact": reduxState.workingContactState.workingContact};
}

function wrapActionCreatorsToProps(dispatch) {
    return {};
}

export default decoratedContactMaintenanceContainer;