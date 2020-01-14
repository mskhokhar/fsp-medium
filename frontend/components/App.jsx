import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import Home from './home/home_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import FeedContainer from '../components/feed/feed_container';
import FeedItemContainer from '../components/feed_Item/feed_item_container'

const App = () => (
    <div>
        <div className='main-container'>
            < Modal />
            < NavbarContainer />
            < ProtectedRoute exact path='/' component={Home} />
            < AuthRoute exact path='/feed' component={FeedContainer} />
            < AuthRoute exact path='/feed/:postId' component={FeedItemContainer}/>
        </div>
        <footer >
            <div>
                <div className="footer-info">
                    <div><a href="">Blogium</a></div>
                    <div className="footer-info-links">
                        <div><a href="">Get Started.</a></div>
                        <div><span>Have an account?      </span><a href="">Sign In</a></div>
                    </div>
                    <div className="footer-info-additional">
                        <div><a href="https://github.com/mskhokhar/fsp-medium">Github repository.</a></div>
                        <div><a href="https://www.linkedin.com/in/manraj-singh-01366710a">LinkedIn profile link.</a></div>
                    </div>
                </div>
                <div className="logo-container">
                    <div className="logo-links">
                        <a href="https://github.com/mskhokhar/fsp-medium"><img src={window.github} alt="github"/></a>
                    </div>
                    <div className="logo-links">
                        <a href="https://www.linkedin.com/in/manraj-singh-01366710a"><img src={window.linkedIn} alt="linkedIn" /></a>
                    </div>
                </div>
            </div>
            </footer> 
    </div>
);

export default App;