import { withRouter } from 'react-router-dom';
import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // this.handleNameClick = this.handleNameClick.bind(this);

    }
    handleClick(modalType){
        if (!this.props.currentUser) {
            this.props.openModal(modalType)
        }
    }
    render(){
        let logoRoute;
        const {loading_detail, loading_index} = this.props;
        if(loading_detail || loading_index){
            return null;
        }
        
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-info">
                        <div className="footer-logoName" ><a >Blogium</a></div>
                        <div className="footer-info-links">
                            <div onClick={() => this.handleClick('signup')}><a >Get Started.</a></div>
                            <div onClick={() => this.handleClick('login')}><span>&nbsp;&nbsp;&nbsp;Have an account?      </span><a >Sign In</a></div>
                        </div>
                        <div className="footer-info-additional">
                            <div><a target="_blank" href="https://github.com/mskhokhar/fsp-medium">Github.</a></div>
                            <div><a target="_blank" href="https://www.linkedin.com/in/manraj-singh-01366710a">LinkedIn.</a></div>
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