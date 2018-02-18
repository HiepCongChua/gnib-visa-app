import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import App from './component/app';
import reducers from './reducers';
import { progressTracker } from './actions/progress';
import style from '../style/style.css';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
progressTracker();

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers, devToolsEnhancer())}>
        <App />
    </Provider>
    , document.querySelector('.container'));