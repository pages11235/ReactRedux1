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
    }

    render() {
        return (<ContactMaintenance
            contact={this.props.contact}
            onListHandler={this.props.actions.listContactsActionCreator}
            onAddHandler={this.props.actions.addContactActionCreator}
            history={this.props.history}/>);
    }
}

ContactMaintenanceContainer.propTypes = {
    // injected by connect() below
    contact: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const decoratedContactMaintenanceContainer = connect(mapStateToProps, wrapActionCreatorsToProps)(ContactMaintenanceContainer);

function mapStateToProps(state, ownProps) {
    const contactId = parseInt(ownProps.match.params.id);

    let contact = new Contact();
    if (contactId !== 0) {
        contact.populateFromDto(state.contactsState.contactList.filter(listContact => listContact.contactId === contactId)[0]);
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