import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {updateContactList} from '../../model/modelApi';
import ContactList from './ContactList';

class ContactListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dispatch: props.dispatch
        };
    }

    render() {
        if (this.props.listDirty) {
            setTimeout(() => {
                updateContactList(this.state.dispatch, function () {}, function (error) {
                    alert(error)
                });
            }, 0);
        }

        return (<ContactList
            contactList={this.props.contactList}
            shouldDisplay={this.props.listRefreshing}/>);
    }
}

ContactListContainer.propTypes = {
    // injected by connect() below
    contactList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const decoratedContactListContainer = connect(mapReduxStateToProps, mapActionCreatorsToProps)(ContactListContainer);

function mapReduxStateToProps(reduxState, ownProps) {
    return {"contactList": reduxState.contactsState.contactList, "listRefreshing": reduxState.contactsState.refreshing, "listDirty": reduxState.contactsState.dirty};
}

function mapActionCreatorsToProps(dispatch) {
    return {actions: {}, dispatch};
}

export default decoratedContactListContainer;