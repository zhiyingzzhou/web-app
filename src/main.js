import React from 'react';
import ReactDom from 'react-dom';

// react-router
import { Router , hashHistory } from 'react-router'

// redux
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

import getRoutes from './routes';
const routes = getRoutes();

// 创建一个store
const store = createStore(reducer,applyMiddleware(thunk));

// styles
import Styles from './scss/main.scss';
// const routes = {
//     path: '/',
//     getComponent(nextState,cb) {
//         require.ensure([],require=>{
//             cb(null,require('./views/Framework'))
//         },'Framework');
//     },
//     indexRoute: {
//         getComponent(nextState,cb){
//             require.ensure([],require=>{
//                 cb(null,require('./pages/index'))
//             },'Index');
//         }
//     },
//     childRoutes: [
//         require('./routes/user')
//     ]
// };

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            {routes}
        </Router>
    </Provider>
,document.getElementById('main-content'));