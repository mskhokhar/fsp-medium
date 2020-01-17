import { withRouter } from 'react-router-dom';
import React from 'react';
import { link } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.createNewPost = this.createNewPost.bind(this);
        this.handleOwnProfile = this.handleOwnProfile.bind(this);
        this.handleLogoCLick = this.handleLogoCLick.bind(this);
        this.handleAlert = this.handleAlert.bind(this);
    }
    componentDidMount(){
        document.addEventListener('click', this.onclick);
    }
    handleOwnProfile(){
        if(this.props.currentUser){
            this.props.history.push(`/users/${this.props.currentUser.id}`)
        }
    }
    handleClick(e){
        e.preventDefault();
        if (this.props.currentUser) {
            this.props.logout();
        }else{
            this.props.openModal('login');
        }
    }
    handleLogoCLick(){
        if (this.props.currentUser) {
            this.props.history.push('/feed');
        } 
    }
    handleAlert(){
        alert("Weclome to Blogium! My name is Manraj Singh. Hire me if you think it's a decent app. My email is manrajkhokhar1995@gmail.com and linkedIn and github repo for this project is in footer. Thanks for visiting. ");
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
                <div onClick={() => this.props.history.push(`/users/${currentUser.id}`)}>Posts</div>
            );
            welcome_message = (
                <li onClick={() => this.props.history.push(`/users/${currentUser.id}`)} className="welcome-message">
                    Hello {username}
                </li>
            );
            // own_followers = (
            //     <div>Followers</div>
            // );
        }
        return (
            <ul className='navbar'> 
                <li onClick={this.handleLogoCLick} ><img className='logo' src={window.webLogo} alt="logo"/></li>
                
                <li>
                    <ul className='navbar-right'>
                        {/* <li className='navbar-right-search'>
                            <i className="material-icons" id="navbar-icon">search</i>
                            <input type="text" placeholder="Search Blogium"/>
                        </li> */}
                        {welcome_message}
                        <li onClick={this.handleAlert} className='navbar-right-notification'>
                            <i className="material-icons" id="navbar-icon">
                                mail_outline
                            </i>
                        </li>
                        <li className='navbar-right-profile'>
                            <i className="material-icons" id="navbar-icon" onClick={this.toggleDropdown}>
                                person
                            </i>
                            <div id="profileDropdown" className="dropdown-content">
                               
                                <div onClick={this.handleOwnProfile}>
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