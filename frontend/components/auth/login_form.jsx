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
        this.props.login(this.state);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login User</h1>
                <label>Username
                    <input 
                    type="text" 
                    value={this.state.username}
                    onChange={this.update('username')}
                    />
                </label>
                <label>email
                    <input 
                    type="text" 
                    value={this.state.email}
                    onChange={this.update('email')}
                    />
                </label>
                <label>password
                    <input 
                    type="password" 
                    value={this.state.password}
                    onChange={this.update('password')}
                    />
                </label>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}
export default LoginForm;