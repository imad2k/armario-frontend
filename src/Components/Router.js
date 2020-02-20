import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import DressingRoom from'./DressingRoom';
import MyCloset from './MyCloset';
import Logout from './Logout';



export default function Router() {
    return (
        <div>
            <Route exact path='/home' component={Home}/>
            <Route path='/dressingroom' component={DressingRoom}/>
            <Route path='/mycloset' component={MyCloset}/>
            <Route path='/logout' component={Logout}/>
        </div>
    )
}
