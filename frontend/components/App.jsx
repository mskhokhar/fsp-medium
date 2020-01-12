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
        < Modal/>
        < NavbarContainer />
        < AuthRoute path='/' component={Home}/>
        < ProtectedRoute path='/feed' component={FeedContainer}/>
    </div>
);

export default App;