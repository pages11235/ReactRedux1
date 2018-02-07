import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as contactActionCreators from '../../redux/actions/contactActionCreators';
import ContactList from './ContactList';

class ContactListContainer extends React.Component {
    // use automatic constructor
    
    render() {
        return (<ContactList contactList={this.props.contactList}/>);
    }
}

ContactListContainer.propTypes = {
    // injected by connect() below
    contactList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const decoratedContactListContainer = connect(mapStateToProps, wrapActionCreatorsToProps)(ContactListContainer);

function mapStateToProps(state, ownProps) {
    return {"contactList": state.contactsState.contactList};
}

function wrapActionCreatorsToProps(dispatch) {
    return {
        // refactor
        actions: bindActionCreators(contactActionCreators, dispatch)
    };
}

export default decoratedContactListContainer;