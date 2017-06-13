import {applyMiddleware , createStore} from "redux";

import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"

import reducer from "./../Reducers/Reducers";


export default createStore(
    reducer,
    applyMiddleware(
        thunk,
        createLogger({collapsed: true})
    )
);



