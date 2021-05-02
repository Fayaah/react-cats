import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './views/app';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
