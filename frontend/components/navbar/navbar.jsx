import React from 'react';

class Navbar extends React.Component{
    render(){
        let action = 'Sign out';
        const {currentUser} = this.props;
        // console.log(currentUser);
        if (!currentUser) {
            action = 'Sign In'
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
                            <i className="material-icons">
                                person
                            </i>
                        </li>
                        <li className='navbar-right-signout'>{action}</li>
                    </ul>
                </li>
            </ul>
        );
    }
}
export default Navbar;