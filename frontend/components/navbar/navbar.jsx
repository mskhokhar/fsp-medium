import { withRouter } from 'react-router-dom';
import React from 'react';
import { link } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.createNewPost = this.createNewPost.bind(this);
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
    createNewPost(){
        this.props.history.push(`/feed/new`);
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
        let signup;
        let username; 
        let new_post;
        let own_posts;
        let own_followers;
        let welcome_message;
        if (!currentUser) {
            action = 'Sign In';
            signup = (
                <li className='navbar-right-signout' onClick={this.handleSignup}>Get started</li>
            );
            username = (
                <a onClick={() => this.props.openModal('signup')}>Click to join this beautiful community.</a>
            );
        }else{
            username = currentUser.username;
            new_post = (
                <div onClick={this.createNewPost}>Create new post</div>
            );
            own_posts = (
                <div>Posts</div>
            );
            welcome_message = (
                <li className="welcome-message">
                    Hello {username}
                </li>
            );
            // own_followers = (
            //     <div>Followers</div>
            // );
        }
        return (
            <ul className='navbar'> 
                <li ><img className='logo' src={window.webLogo} alt="logo"/></li>
                
                <li>
                    <ul className='navbar-right'>
                        {/* <li className='navbar-right-search'>
                            <i className="material-icons" id="navbar-icon">search</i>
                            <input type="text" placeholder="Search Blogium"/>
                        </li> */}
                        {welcome_message}
                        <li className='navbar-right-notification'>
                            <i className="material-icons" id="navbar-icon">
                                notifications_active
                            </i>
                        </li>
                        <li className='navbar-right-profile'>
                            <i className="material-icons" id="navbar-icon" onClick={this.toggleDropdown}>
                                person
                            </i>
                            <div id="profileDropdown" className="dropdown-content">
                               
                                <div >
                                    <div className="dropdown-profile">
                                        <i className="material-icons" id="dropdown-profile-icon">
                                            account_circle
                                        </i>
                                    </div>
                                    <div>{username}</div>
                                </div>
                                {new_post}
                                {own_posts}
                                {own_followers}
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
export default withRouter(Navbar);