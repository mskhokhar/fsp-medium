import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }
    componentDidMount(){
        document.addEventListener('click', this.onclick);
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
        document.getElementById("profileDropdown").classList.toggle("show");
    }
    onclick (e) {
        if (!e.target.matches('.material-icons')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
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
                        <li className='navbar-right-profile'>
                            <i className="material-icons" onClick={this.toggleDropdown}>
                                person
                            </i>
                            <div id="profileDropdown" className="dropdown-content">
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