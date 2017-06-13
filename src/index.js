import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Link, browserHistory, Router, Route  } from 'react-router';
import store from './Store/AppStore';
import { createStore } from 'redux';
import './index.css';
import "./css/app.css";
import "./css/custom.css";

import UserPanel from './Scenes/Pages/UserPanel/Index';


render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <div>
                <Route path="/" component={UserPanel}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));