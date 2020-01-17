import { withRouter } from 'react-router-dom';
import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.successfulLogin(), this.props.openModal('signup'));
        ;
    }
    handleLogin(){
        this.props.openModal('login');
    }
    successfulLogin() {
        this.props.closeModal();
        this.props.history.push('/feed')
    }
    render() {
        const {  errors } = this.props;
        return (
            <div style={{height: '550px'}}className='auth-form' >
                <div className='auth-img-container' ><img src={window.signup1} alt="" /></div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <h1 className='signup-auth-header'>Join Blogium.</h1>
                    <div className="auth-form-intro-container">
                            <p className="auth-intro">Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</p>
                    </div>
                    <div className='signup-auth-form-credentials'>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"

                        />
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"

                        />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"

                        />
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            placeholder="Last Name"

                        />
                        <input className='signup-submit-button' type="submit" value='Sign Up' />
                    </div>
                    </form>
                    <div className="signup-form-login">
                        <span onClick={this.handleLogin} >Already have an account? <a>Sign in</a></span>
                    </div>
                    <ul className="auth-errors">
                        <li>{errors[0]}</li>     
                    </ul>
                </div>
                <div className='auth-img-container'><img src={window.signup2} alt="" /></div>
            </div>
        );
    }
}
export default withRouter(SignupForm);