import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';

import './index.css';

// 引入antd-mobile UI框架样式
import 'antd-mobile/dist/antd-mobile.css';

// 引入confront
import './assets/style/index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

// 引入viewport
// import './utils/viewport.min.js';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
