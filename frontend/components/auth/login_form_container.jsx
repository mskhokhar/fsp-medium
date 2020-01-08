import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'login'
});
const mapDispatchToProps = dispatch => ({
    processForm: userForm => dispatch(login(userForm)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);