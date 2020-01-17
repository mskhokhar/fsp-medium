import { withRouter } from 'react-router-dom';
import React from 'react';

class Footer extends React.Component{
    handleClick(modalType){
        this.props.openModal(modalType)
    }
    render(){
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-info">
                        <div><a  href="/">Blogium</a></div>
                        <div className="footer-info-links">
                            <div onClick={() => this.handleClick('signup')}><a >Get Started.</a></div>
                            <div onClick={() => this.handleClick('login')}><span>&nbsp;&nbsp;&nbsp;Have an account?      </span><a >Sign In</a></div>
                        </div>
                        <div className="footer-info-additional">
                            <div><a target="_blank" href="https://github.com/mskhokhar/fsp-medium">Github repository.</a></div>
                            <div><a target="_blank" href="https://www.linkedin.com/in/manraj-singh-01366710a">LinkedIn profile link.</a></div>
                        </div>
                    </div>
                    <div className="logo-container">
                        <div className="logo-links">
                            <a target="_blank" href="https://github.com/mskhokhar/fsp-medium"><img src={window.github} alt="github" /></a>
                        </div>
                        <div className="logo-links">
                            <a target="_blank" href="https://www.linkedin.com/in/manraj-singh-01366710a"><img src={window.linkedIn} alt="linkedIn" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Footer)