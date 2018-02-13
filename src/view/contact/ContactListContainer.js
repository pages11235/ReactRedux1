import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as Status from '../../model/status';
import {refreshContactList, markContactListStale} from '../../controller/controller';

import ContactList from './ContactList';

class ContactListContainer extends React.Component {
    render() {
        return (<ContactList contactList={this.props.contactListState.contactList} isWaiting={this.props.contactListState.status !== Status.FRESH}/>);
    }

    componentDidMount() {
        if (this.props.contactListState.status === Status.STALE) {
            refreshContactList();
        }
    }

    componentWillUnmount() {
        markContactListStale();
    }
}

ContactListContainer.propTypes = {
    // injected by connect() below
    contactListState: PropTypes.object.isRequired
};

const decoratedContactListContainer = connect(mapReduxStateToProps, mapActionCreatorsToProps)(ContactListContainer);

function mapReduxStateToProps(reduxState, ownProps) {
    return {"contactListState": reduxState.contactListState};
}

function mapActionCreatorsToProps(dispatch) {
    return {};
}

export default decoratedContactListContainer;
