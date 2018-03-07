import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import {Provider} from 'react-redux';
//import configureStore from './store/configureStore';

//const store = configureStore();
//const store;

ReactDOM.render(
    //<Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    //</Provider>
    , document.getElementById('root'));

registerServiceWorker();
