import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field){
        return e => this.setState({[field]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal(), this.props.openModal('login'));
        ;
    }
    render(){
        const {errors} = this.props;
        return (
            <div className='auth-form'>
                <div className='auth-img-container' ><img src={window.auth_back_2} alt="" /></div>
                <div>
                    <form  onSubmit={this.handleSubmit}>
                        <h2 className='auth-header'>Welcome back.</h2>
                        <p className="auth-intro">Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</p>
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
                            <input className='submit-button' type="submit" value='LogIn' />
                        </div>
                    </form>
                    <ul>
                        {
                            errors.map(e => {
                                return <li>{e}</li>
                            })
                        }
                    </ul>
                </div>
                <div><img src={window.auth_back_1} alt=""/></div>
            </div>
        );
    }
}
export default LoginForm;