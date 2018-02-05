import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import contactActionCreators from '../../redux/actions/contactActionCreators';
import Contact from './Contact';

class ContactContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Contact />
        );
    }
}

ContactContainer.propTypes = {
    // injected by connect() below
    contactList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const decoratedContactContainer = connect(mapStateToProps, wrapActionCreatorsToProps)(ContactContainer);

function mapStateToProps(state, ownProps) {
    return {contactList: state.contactList};
}

function wrapActionCreatorsToProps(dispatch) {
    return {
        // refactor
        actions: bindActionCreators(contactActionCreators, dispatch)
    };
}

export default decoratedContactContainer;