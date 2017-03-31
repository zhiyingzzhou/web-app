import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

// 创建一个store
const store = createStore(reducer);

// styles
import Styles from './scss/main.scss';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('main-content'));