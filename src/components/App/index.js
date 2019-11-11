import React from 'react';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import Comments from "../Comments";
import { withFirebase } from '../Firebase';
//the user data is stored in App props

import { withAuthentication } from '../Session';
const App = () => (
    <Router>
        <div>


            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
            />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.COMMENTS} component={Comments} />
        </div>
    </Router>
);
export default withAuthentication(App);