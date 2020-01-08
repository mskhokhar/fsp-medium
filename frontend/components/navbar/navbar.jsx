import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        if (this.props.currentUser) {
            this.props.logout();
        }else{
            this.props.openModal('login');
        }
    }
    handleSignup(e){
        e.preventDefault();
        this.props.openModal('signup');
    }
    toggleDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    render(){
        let action = 'Sign out';
        const {currentUser} = this.props;
        // console.log(currentUser);
        let signup; 
        if (!currentUser) {
            action = 'Sign In';
            signup = (
                <li className='navbar-right-signout' onClick={this.handleSignup}>Signup</li>
            );
        }
        return (
            <ul className='navbar'> 
                <li ><img className='logo' src={window.webLogo} alt="logo"/></li>
                <li>
                    <ul className='navbar-right'>
                        <li className='navbar-right-search'>
                            <i className="material-icons">search</i>
                            <input type="text" placeholder="Search Blogium"/>
                        </li>
                        <li className='navbar-right-notification'>
                            <i className="material-icons">
                                notifications_active
                            </i>
                        </li>
                        <li className='navbar-right-profile' onClick={this.toggleDropdown}>
                            <i className="material-icons">
                                person
                            </i>
                            <div id="myDropdown" className="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </li>
                        <li className='navbar-right-signout' onClick={this.handleClick}>{action}</li>
                        {signup}
                    </ul>
                </li>
            </ul>
        );
    }
}
export default Navbar;