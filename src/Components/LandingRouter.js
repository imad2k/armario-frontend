import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from './Login';
import NewAccount from './Signup';


export default function LandingRouter() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/signup' component={NewAccount}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
