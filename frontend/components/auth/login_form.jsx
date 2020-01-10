import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuestLogin = this.handleGuestLogin.bind(this);
    }
    update(field){
        return e => this.setState({[field]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        console.log('1st condition');
        console.log(e.currentTarget.elements[2].defaultValue);
        this.props.processForm(this.state).then(this.props.closeModal(), this.props.openModal('login'));
      
    }
    handleGuestLogin(e) {
        e.preventDefault();
        const guestUser = {
            username: 'starwars_01',
            password: '123456'
        }
        this.props.processForm(guestUser).then(this.props.closeModal());
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
                            <input className='submit-button' onClick={this.handleGuestLogin} type="button" value='Guest Login' />
                        </div>
                    </form>
                    <ul className="auth-errors">
                        <li>{errors[0]}</li>
                    </ul>
                </div>
                <div><img src={window.auth_back_1} alt=""/></div>
            </div>
        );
    }
}
export default LoginForm;