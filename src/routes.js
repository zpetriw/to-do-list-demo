import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AddItemPage from './components/addItem/AddItemPage';

export default (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/additem' component={AddItemPage}/>
        <Route path='/about' component={AboutPage}/>
        {/* both /roster and /roster/:number begin with /roster */}
        {/* <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/> */}
    </Switch>
)