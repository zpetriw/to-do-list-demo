import React from 'react';
import { Switch, Route } from 'react-router';
import ItemsPage from './components/items/ItemsPage';
import AddItemPage from './components/items/AddItemPage';
import AboutPage from './components/about/AboutPage';

export default (
    <Switch>
        <Route exact path="/" component={ItemsPage}/>
        <Route path="/additem" component={AddItemPage}/>
        <Route path="/about" component={AboutPage}/>
    </Switch>
);