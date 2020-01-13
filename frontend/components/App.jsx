import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './auth/login_form_container';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import Home from './home/home_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import FeedContainer from '../components/feed/feed_container'

const App = () => (
    <div>
        <div class='main-container'>
            < Modal />
            < NavbarContainer />
            < AuthRoute path='/' component={Home} />
            < Route path='/feed' component={FeedContainer} />
        </div>
        <footer >
            <div>
                <div class="footer-info">
                    <div><a href="">Blogium</a></div>
                    <div class="footer-info-links">
                        <div><a href="">Get Started.</a></div>
                        <div><span>Have an account?      </span><a href="">Sign In</a></div>
                    </div>
                    <div class="footer-info-additional">
                        <div><a href="https://github.com/mskhokhar/fsp-medium">Github repository.</a></div>
                        <div><a href="https://www.linkedin.com/in/manraj-singh-01366710a">LinkedIn profile link.</a></div>
                    </div>
                </div>
                <div class="logo-container">
                    <div class="logo-links">
                        <a href="https://github.com/mskhokhar/fsp-medium"><img src={window.github} alt="github"/></a>
                    </div>
                    <div class="logo-links">
                        <a href="https://www.linkedin.com/in/manraj-singh-01366710a"><img src={window.linkedIn} alt="linkedIn" /></a>
                    </div>
                </div>
            </div>
            </footer> 
    </div>
);

export default App;