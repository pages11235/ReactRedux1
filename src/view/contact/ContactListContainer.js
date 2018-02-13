import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import contactListState from '../../model/reducers/contactListReducer';
import * as Status from '../../model/status';

import ContactList from './ContactList';

class ContactListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.contactList) {
            this.setState({contactList: nextProps.contactList});
        }
    }

    render() {
        return (<ContactList contactList={this.props.contactListState.contactList} isWaiting={this.props.contactListState.status !== Status.FRESH}/>);
    }

    componentDidMount() {
        if (this.contactListState.status === Status.STALE) {
            // Request a new list
        }
    }

    componentWillUnmount() {
        // Mark list as stale
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
