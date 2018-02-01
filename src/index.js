import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './index.css';
import './ui-toolkit/css/nm-cx/main.css';
import store from './store';
import {Provider} from 'react-redux';

const Root = () => {
    return (
        <Provider store={store}>
                <App />
        </Provider>
    )
}
ReactDOM.render(<Root />, document.getElementById('root'));
