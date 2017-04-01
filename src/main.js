import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// redux
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducer from './reducer';

// 创建一个store
const store = createStore(reducer,applyMiddleware(thunk));

// styles
import Styles from './scss/main.scss';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('main-content'));