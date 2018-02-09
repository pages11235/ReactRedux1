import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {updateContactList} from '../../model/modelApi';
import ContactList from './ContactList';

class ContactListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contactList: null,
            dispatch: props.dispatch
        };
    }

    componentDidMount() {
        setTimeout(() => {
            updateContactList(this.state.dispatch, function () {}, function (error) {
                alert(error)
            });
        }, 0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.contactList) {
            this.setState({contactList: nextProps.contactList});
        }
    }

    render() {
        return (<ContactList contactList={this.state.contactList}/>);
    }
}

ContactListContainer.propTypes = {
    // injected by connect() below
    contactList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const decoratedContactListContainer = connect(mapReduxStateToProps, mapActionCreatorsToProps)(ContactListContainer);

function mapReduxStateToProps(reduxState, ownProps) {
    console.log("Map Redux to Props has contactList: " + !(!reduxState.contactsState.contactList));
    return {"contactList": reduxState.contactsState.contactList};
}

function mapActionCreatorsToProps(dispatch) {
    return {actions: {}, dispatch};
}

export default decoratedContactListContainer;