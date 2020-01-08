import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './auth/login_form_container';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        < Modal/>
        < NavbarContainer />
        < Route path='/login' component={LoginFormContainer}/>
    </div>
);

export default App;