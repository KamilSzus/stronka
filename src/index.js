import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.cartArray = []
window.cart = []
window.loginState = ""

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
