import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
    errors: state.errors.session
});
const mapDispatchToProps = dispatch => ({
    login: userForm => dispatch(signup(userForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)