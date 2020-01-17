import React from 'react';
import {withRouter} from 'react-router-dom';
class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuestLogin = this.handleGuestLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.redirect = this.redirect.bind(this);
        this.successfulLogin = this.successfulLogin.bind(this);
        this.autoFillLogin = this.autoFillLogin.bind(this);
    }
    autoFillLogin() {
            let username = this.props.demoUser.username.split("");
            let password = this.props.demoUser.password.split("");
            const emailInterval = setInterval(() => {
                const first = username.splice(0, 1);
                this.setState(
                    { username: this.state.username + first[0] },
                    () => {
                        if (!username.length) {
                            clearInterval(emailInterval);
                            const passwordInterval = setInterval(() => {
                                const first = password.splice(0, 1);
                                this.setState(
                                    { password: this.state.password + first[0] },
                                    () => {
                                        if (!password.length) {
                                            clearInterval(passwordInterval)
                                            this.props.processForm(this.state).then(this.successfulLogin());
                                        }

                                    }
                                )
                            }, 50)
                        }
                    }
                );
            }, 50);
        
    }
    update(field){
        return e => this.setState({[field]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(this.successfulLogin(), this.props.openModal('login'));
      
    }
    successfulLogin(){
        this.props.closeModal();
        setTimeout(this.redirect,1000);
    }
    redirect(){
        this.props.history.push('/feed');
    }
    handleSignup(){
        this.props.openModal('signup');
    }
    handleGuestLogin(e) {
        // e.preventDefault();
        // const guestUser = {
        //     username: 'guest_user',
        //     password: '123456'
        // }
        // this.props.demoUser = guestUser;
        // this.props.processForm(guestUser).then(this.successfulLogin());

    }
    
    render(){
        const {errors} = this.props;
        return (
            <div className='auth-form'>
                <div className='auth-img-container' ><img src={window.auth_back_2} alt="" /></div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h1 className='auth-header'>Welcome back.</h1>
                        <div className="auth-form-intro-container">
                            <p className="auth-intro">Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</p>
                        </div>
                        <div className='auth-form-credentials'>
                            <input
                                type="text"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                            <input className='submit-button'  type="submit"  value='LogIn' />
                            <input className='submit-button' onClick={this.autoFillLogin} type="button" value='Guest Login' />
                            <span onClick={this.handleSignup} className="login-form-signup">No Account? <span>Create one</span></span>
                        </div>
                    </form>
                    <ul className="auth-errors">
                        <li>{errors[0]}</li>
                    </ul>
                </div>
                <div><img className='auth-img-container' src={window.auth_back_1} alt=""/></div>
            </div>
        );
    }
}
export default withRouter(LoginForm);