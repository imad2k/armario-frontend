import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './Home';
import DressingRoom from'./DressingRoom';
import SavedOutfits from './SavedOutfits';
import MyCloset from './MyCloset';
import Signup from './Signup';
import Login from'./Login';
import LandingPage from './LandingPage';
import NotFound from './NotFound';


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch> 
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/home' component={Home}/>
                    <Route path='/dressingroom' component={DressingRoom}/>
                    <Route path='/savedoutfits' component={SavedOutfits}/>
                    <Route path='/mycloset' component={MyCloset} activeClass/>                    
                    <Route path='/signup' component={Signup}/>
                    <Route path='/login' component={Login}/>
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
